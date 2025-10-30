import { serve, createClient } from "./deps.ts";

interface RequestBody {
  action: 'add' | 'remove';
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    source: {
      name: string;
    };
    publishedAt: string;
    author: string;
  };
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const token = authHeader.replace('Bearer ', '');
    // Decode JWT payload to extract the user id (verified by the gateway)
    let userId = '';
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      userId = payload?.sub || '';
    } catch (_e) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!userId) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );

    const { action, article } = await req.json();

    if (action === 'add') {
      console.log(`Adding bookmark for user: ${userId}`);
      const { data, error } = await supabaseClient
        .from('bookmarks')
        .insert({
          user_id: userId,
          title: article.title,
          description: article.description,
          url: article.url,
          url_to_image: article.urlToImage,
          source_name: article.source.name,
          published_at: article.publishedAt,
          author: article.author,
        })
        .select()
        .maybeSingle();

      if (error) {
        if (error.code === '23505') {
          return new Response(
            JSON.stringify({ message: 'Already bookmarked' }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        throw error;
      }

      console.log('Bookmark added successfully');
      return new Response(
        JSON.stringify({ message: 'Bookmark added', bookmark: data }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else if (action === 'remove') {
      console.log(`Removing bookmark for user: ${userId}`);
      const { error } = await supabaseClient
        .from('bookmarks')
        .delete()
        .eq('user_id', userId)
        .eq('url', article.url);

      if (error) {
        throw error;
      }

      console.log('Bookmark removed successfully');
      return new Response(
        JSON.stringify({ message: 'Bookmark removed' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      throw new Error('Invalid action');
    }
  } catch (error) {
    console.error('Error in manage-bookmark function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
