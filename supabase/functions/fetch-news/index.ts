import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { category = 'general' } = await req.json();
    const newsApiKey = Deno.env.get('NEWSAPI_KEY');

    console.log(`Fetching news for category: ${category}`);

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=us&pageSize=20&apiKey=${newsApiKey}`
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('NewsAPI error:', data);
      throw new Error(data.message || 'Failed to fetch news');
    }

    console.log(`Successfully fetched ${data.articles?.length || 0} articles`);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in fetch-news function:', error);
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
