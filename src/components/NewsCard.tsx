import { ExternalLink, Bookmark, BookmarkCheck, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Article } from "@/pages/Index";
import { format } from "date-fns";

interface NewsCardProps {
  article: Article;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

const NewsCard = ({ article, isBookmarked, onToggleBookmark }: NewsCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="group h-full flex flex-col overflow-hidden border-border hover:shadow-card-hover transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-4xl">📰</span>
            </div>
          )}
          
          {/* Bookmark Button Overlay */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              onToggleBookmark();
            }}
            className="absolute top-3 right-3 p-2 bg-card/90 backdrop-blur-sm rounded-full hover:bg-card transition-colors duration-200 shadow-lg"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-5 h-5 text-accent fill-accent" />
            ) : (
              <Bookmark className="w-5 h-5 text-foreground" />
            )}
          </motion.button>
        </div>

      <CardContent className="flex-1 p-5">
        {/* Source Badge */}
        <Badge variant="secondary" className="mb-3">
          {article.source.name}
        </Badge>

        {/* Title */}
        <h3 className="font-semibold text-lg text-foreground leading-snug mb-3 line-clamp-3 group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {article.description}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex flex-col gap-3">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground w-full">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{format(new Date(article.publishedAt), "MMM d, yyyy")}</span>
          </div>
          {article.author && (
            <div className="flex items-center gap-1 truncate">
              <User className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{article.author}</span>
            </div>
          )}
        </div>

        {/* Read More Button */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="outline"
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
          >
            Read Full Article
            <ExternalLink className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
    </motion.div>
  );
};

export default NewsCard;
