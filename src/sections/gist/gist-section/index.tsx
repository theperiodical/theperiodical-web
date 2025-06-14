"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";
import { useGetGists } from "@/services/gist.service";
import { fDate } from "@/utils/format-time";
import {
  Loader2,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Grid3X3,
  Eye,
  Check,
  Clock,
  Bookmark,
  Share2,
  Download,
  Menu,
  X,
  FileText,
  Hash,
  Target,
  CheckCircle,
  Circle,
  RotateCcw,
  MoreVertical,
  PenTool,
  Lightbulb,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ViewMode = 'overview' | 'focus';

export default function GistSection({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<ViewMode>('overview');
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [gist, setGist] = useState<any>(null);
  const [readTopics, setReadTopics] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const topicRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const { gists, gistsLoading, gistsError } = useGetGists(slug);

  useEffect(() => {
    if (!gistsLoading && gists?.length > 0) {
      setGist(gists[0]);
    }
  }, [gists, gistsLoading]);  // Handle URL parameters for direct topic navigation
  useEffect(() => {
    if (gist?.topics && searchParams) {
      const topicId = searchParams.get('topic');
      const mode = searchParams.get('mode') as ViewMode;
      
      if (topicId) {
        const topicIndex = gist.topics.findIndex((topic: any) => topic.id === topicId);
        if (topicIndex !== -1) {
          setCurrentTopicIndex(topicIndex);
          if (mode === 'focus') {
            setViewMode('focus');
            // Scroll to content area after setting focus mode
            setTimeout(() => {
              const navHeight = 140; // Account for navbar and tabs height
              const contentElement = document.querySelector('[data-focus-content]');
              if (contentElement) {
                const elementPosition = contentElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navHeight;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }, 400); // Give more time for the animation to complete
          }
        }
      } else if (mode) {
        setViewMode(mode);
      }
    }
  }, [gist, searchParams]);

  // Handle scroll progress in focus mode
  useEffect(() => {
    if (viewMode === 'focus' && contentRef.current) {
      const handleScroll = () => {
        const element = contentRef.current;
        if (element) {
          const scrollTop = element.scrollTop;
          const scrollHeight = element.scrollHeight - element.clientHeight;
          const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
          setScrollProgress(Math.min(progress, 100));
        }
      };

      const element = contentRef.current;
      element.addEventListener('scroll', handleScroll);
      return () => element?.removeEventListener('scroll', handleScroll);
    }
  }, [viewMode]);

  // Handle sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const markTopicAsRead = (topicId: string) => {
    setReadTopics(prev => new Set([...Array.from(prev), topicId]));
  };  const switchToFocusMode = (index: number) => {
    setIsTransitioning(true);
    setCurrentTopicIndex(index);
    setViewMode('focus');
    setSidebarOpen(false);
    
    // Update URL when switching to focus mode
    if (gist) {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('topic', gist.topics[index].id);
      newUrl.searchParams.set('mode', 'focus');
      window.history.replaceState({}, '', newUrl.toString());
    }
    
    // Smooth scroll to focus content with navbar offset
    setTimeout(() => {
      const navHeight = 140; // Account for navbar and tabs height
      const contentElement = document.querySelector('[data-focus-content]');
      if (contentElement) {
        const elementPosition = contentElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsTransitioning(false);
    }, 200);
  };
  const nextTopic = () => {
    if (gist && currentTopicIndex < gist.topics.length - 1) {
      const newIndex = currentTopicIndex + 1;
      setCurrentTopicIndex(newIndex);
      markTopicAsRead(gist.topics[currentTopicIndex].id);
      
      // Update URL to reflect current topic
      if (viewMode === 'focus') {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('topic', gist.topics[newIndex].id);
        newUrl.searchParams.set('mode', 'focus');
        window.history.replaceState({}, '', newUrl.toString());
      }
    }
  };

  const prevTopic = () => {
    if (currentTopicIndex > 0) {
      const newIndex = currentTopicIndex - 1;
      setCurrentTopicIndex(newIndex);
      
      // Update URL to reflect current topic
      if (viewMode === 'focus' && gist) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('topic', gist.topics[newIndex].id);
        newUrl.searchParams.set('mode', 'focus');
        window.history.replaceState({}, '', newUrl.toString());
      }
    }
  };

  const getReadingProgress = () => {
    if (!gist) return 0;
    return Math.round((readTopics.size / gist.topics.length) * 100);
  };

  const resetProgress = () => {
    setReadTopics(new Set());
    setCurrentTopicIndex(0);
  };

  if (gistsLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-[80vh] space-y-6"
      >
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary/20 rounded-full animate-pulse" />
          <Loader2 className="absolute inset-0 w-20 h-20 text-primary animate-spin" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-foreground">Loading Weekly Gist</h3>
          <p className="text-muted-foreground">Preparing your curated gist...</p>
        </div>
      </motion.div>
    );
  }

  if (gistsError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-6">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
          <X className="w-8 h-8 text-destructive" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-foreground">Failed to Load</h3>
          <p className="text-muted-foreground">Unable to fetch the weekly gist. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!gist) return null;

  const currentTopic = gist.topics[currentTopicIndex];

  return (
    <section className="pt-16 pb-40 relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">Weekly Gist</span>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {gist.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {gist.description}
                </p>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">
                    {fDate(gist.from)} - {fDate(gist.to)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{gist.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">{gist.topics.length} Topics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">~{gist.topics.length * 4} min read</span>
                </div>
              </div>

              {/* Progress */}
              <div className="max-w-md mx-auto space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold text-foreground">{getReadingProgress()}% Complete</span>
                </div>
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${getReadingProgress()}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <button
                  onClick={resetProgress}
                  className="flex items-center gap-2 mx-auto px-3 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset Progress
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={`sticky top-20 z-50 transition-all duration-300 ${isSticky ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : ''}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-1 p-1 bg-muted/60 rounded-xl backdrop-blur-sm">                <button
                  onClick={() => {
                    setViewMode('overview');
                    // Update URL when switching to overview
                    const newUrl = new URL(window.location.href);
                    newUrl.searchParams.delete('topic');
                    newUrl.searchParams.delete('mode');
                    window.history.replaceState({}, '', newUrl.toString());
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    viewMode === 'overview'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                  <span>All Topics</span>
                </button>                <button
                  onClick={() => {
                    setIsTransitioning(true);
                    setViewMode('focus');
                    // Update URL when switching to focus mode
                    if (gist) {
                      const newUrl = new URL(window.location.href);
                      newUrl.searchParams.set('topic', gist.topics[currentTopicIndex].id);
                      newUrl.searchParams.set('mode', 'focus');
                      window.history.replaceState({}, '', newUrl.toString());
                    }
                    // Scroll to focus content
                    setTimeout(() => {
                      const navHeight = 140;
                      const contentElement = document.querySelector('[data-focus-content]');
                      if (contentElement) {
                        const elementPosition = contentElement.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - navHeight;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                      setIsTransitioning(false);
                    }, 200);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    viewMode === 'focus'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  } ${isTransitioning ? 'opacity-50 pointer-events-none' : ''}`}
                  disabled={isTransitioning}
                >
                  <Eye className="w-4 h-4" />
                  <span>Focus Mode</span>
                  {isTransitioning && <Loader2 className="w-3 h-3 animate-spin ml-1" />}
                </button>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-lg transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <AnimatePresence mode="wait">
            {viewMode === 'overview' ? (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-7xl mx-auto pt-8"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gist.topics.map((topic: any, index: number) => {
                    const isRead = readTopics.has(topic.id);
                    return (
                      <motion.div
                        key={topic.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                        onClick={() => switchToFocusMode(index)}
                      >
                        <div className={`relative h-full p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                          isRead
                            ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 dark:from-emerald-950/30 dark:to-green-950/30 dark:border-emerald-800'
                            : 'bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 hover:bg-card'
                        }`}>
                          {/* Topic Number & Status */}
                          <div className="flex items-start justify-between mb-4">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold ${
                              isRead
                                ? 'bg-emerald-500 text-white'
                                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                            } transition-all duration-300`}>
                              {isRead ? (
                                <Check className="w-5 h-5" />
                              ) : (
                                index + 1
                              )}
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isRead
                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {isRead ? 'Completed' : 'Unread'}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                              {topic.title}
                            </h3>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>~4 min</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                <span>Article</span>
                              </div>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                              {topic.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                            </p>
                          </div>

                          {/* Action */}
                          <div className="mt-6 pt-4 border-t border-border/50">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                                {isRead ? 'Review' : 'Start Reading'}
                              </span>
                              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>

                          {/* Glow Effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (              <motion.div
                key="focus"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto pt-8"
                data-focus-content
              >
                {/* Focus Navigation */}
                <div className="sticky top-40 z-40 mb-8">
                  <div className="bg-card/80 backdrop-blur-xl border border-border/40 rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      {/* Previous Button */}
                      <button
                        onClick={prevTopic}
                        disabled={currentTopicIndex === 0}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline font-medium">Previous</span>
                      </button>

                      {/* Center Info */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl">
                          <PenTool className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">
                            Topic {currentTopicIndex + 1} of {gist.topics.length}
                          </span>
                        </div>                        {/* Progress Dots */}
                        <div className="hidden md:flex items-center gap-1">
                          {gist.topics.map((_: any, index: number) => (
                            <button
                              key={index}
                              onClick={() => {
                                setCurrentTopicIndex(index);
                                // Update URL when clicking dots
                                if (viewMode === 'focus') {
                                  const newUrl = new URL(window.location.href);
                                  newUrl.searchParams.set('topic', gist.topics[index].id);
                                  newUrl.searchParams.set('mode', 'focus');
                                  window.history.replaceState({}, '', newUrl.toString());
                                }
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                index === currentTopicIndex
                                  ? 'bg-primary w-6'
                                  : readTopics.has(gist.topics[index].id)
                                  ? 'bg-emerald-500'
                                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                              }`}
                              title={`Topic ${index + 1}: ${gist.topics[index].title}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={nextTopic}
                        disabled={currentTopicIndex === gist.topics.length - 1}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <span className="hidden sm:inline font-medium">Next</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Reading Progress Bar */}
                    <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${scrollProgress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Topic Content */}
                <AnimatePresence mode="wait">
                  <motion.article
                    key={currentTopic.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card/90 backdrop-blur-sm rounded-3xl border border-border/40 shadow-xl overflow-hidden"
                    ref={contentRef}
                  >                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 px-8 py-6 border-b border-border/30">
                      <div className="flex items-start justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl">
                              <span className="text-xl font-bold text-primary">{currentTopicIndex + 1}</span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Hash className="w-4 h-4" />
                                <span className="text-sm font-medium">Topic {currentTopicIndex + 1}</span>
                                {searchParams?.get('topic') === currentTopic.id && (
                                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full dark:bg-green-900/30 dark:text-green-300">
                                    <ArrowRight className="w-3 h-3" />
                                    From Latest Topics
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">~4 minutes read</span>
                              </div>
                            </div>
                          </div>
                          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                            {currentTopic.title}
                          </h1>
                        </div>

                        <button
                          onClick={() => markTopicAsRead(currentTopic.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                            readTopics.has(currentTopic.id)
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                              : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {readTopics.has(currentTopic.id) ? (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              <span className="hidden sm:inline">Completed</span>
                            </>
                          ) : (
                            <>
                              <Circle className="w-4 h-4" />
                              <span className="hidden text-nowrap sm:inline">Mark Complete</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div
                        className="prose prose-lg prose-slate max-w-none dark:prose-invert
                          prose-headings:text-foreground prose-headings:font-bold prose-headings:leading-tight
                          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-base prose-p:mb-6
                          prose-strong:text-foreground prose-strong:font-semibold
                          prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:text-base
                          prose-ul:space-y-2 prose-ol:space-y-2 prose-li:marker:text-primary
                          prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:pb-3 prose-h1:border-b prose-h1:border-border/30
                          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:text-primary
                          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-foreground
                          prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
                          prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-foreground
                          prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-xl
                          prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                          prose-table:border-collapse prose-table:border prose-table:border-border
                          prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-4 prose-th:py-2
                          prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2"
                        dangerouslySetInnerHTML={{ __html: currentTopic.content }}
                      />
                    </div>

                    {/* Footer */}
                    <div className="px-8 py-6 border-t border-border/30 bg-muted/20">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => markTopicAsRead(currentTopic.id)}
                          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                            readTopics.has(currentTopic.id)
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                              : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                          }`}
                        >
                          {readTopics.has(currentTopic.id) ? (
                            <>
                              <Star className="w-4 h-4" />
                              Topic Completed
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              Mark as Complete
                            </>
                          )}
                        </button>

                        {currentTopicIndex < gist.topics.length - 1 && (
                          <button
                            onClick={nextTopic}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                          >
                            <span>Next Topic</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
