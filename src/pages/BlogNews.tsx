
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, FileText, Newspaper, ChevronRight, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BlogNews = () => {
  const featuredArticle = {
    title: "ChargeTrux Announces New Mobile Fast-Charging Technology",
    excerpt: "Breakthrough technology enables 350kW charging capabilities for our mobile charging fleet, setting new industry standards for commercial EV charging solutions.",
    image: "/lovable-uploads/b30d0fbc-35fd-4da3-8dae-db69c558ebe5.png",
    date: "April 25, 2025",
    readTime: "5 min read",
    category: "Technology",
    author: "Sarah Johnson, CTO"
  };

  const blogPosts = [
    {
      title: "5 Ways Mobile Charging is Transforming Last-Mile Delivery Fleets",
      excerpt: "Discover how on-demand charging is helping delivery companies meet their electrification goals while maintaining operational efficiency.",
      image: "/lovable-uploads/2a17e2a2-043b-48fd-b836-dde88b37533a.png",
      date: "April 18, 2025",
      readTime: "4 min read",
      category: "Industry Insights",
      author: "Michael Chen"
    },
    {
      title: "The Economics of Fleet Electrification: A TCO Analysis",
      excerpt: "Our comprehensive total cost of ownership analysis reveals the financial benefits of transitioning commercial fleets to electric vehicles.",
      image: "/lovable-uploads/54724381-b62f-4310-86cd-4db96d06f82e.png",
      date: "April 10, 2025",
      readTime: "7 min read",
      category: "Business",
      author: "Priya Sharma"
    },
    {
      title: "ChargeTrux Expands Operations to Three New Major US Cities",
      excerpt: "Responding to growing demand, ChargeTrux mobile charging services are now available in Boston, Chicago, and Seattle.",
      image: "/lovable-uploads/1ff94a4b-5ae5-46ba-a96a-9574796883ad.png",
      date: "March 30, 2025",
      readTime: "3 min read",
      category: "Company News",
      author: "Robert Garcia"
    }
  ];

  const newsPosts = [
    {
      title: "ChargeTrux Partners with Major Logistics Company for Nationwide Deployment",
      excerpt: "Strategic partnership will bring mobile charging services to over 50 logistics hubs across the country, supporting one of the largest EV fleet transitions in the industry.",
      date: "April 22, 2025",
      category: "Press Release"
    },
    {
      title: "ChargeTrux Raises $75M in Series B Funding to Scale Mobile Charging Network",
      excerpt: "Investment led by leading clean energy and mobility venture funds will accelerate technology development and market expansion.",
      date: "April 15, 2025",
      category: "Investor News"
    },
    {
      title: "ChargeTrux Wins Innovator of the Year Award at EV Infrastructure Summit",
      excerpt: "Industry recognition highlights the company's contribution to solving critical charging infrastructure challenges for commercial fleet operators.",
      date: "March 28, 2025",
      category: "Awards"
    },
    {
      title: "ChargeTrux Featured in Transportation Technology Quarterly as Climate Tech Leader",
      excerpt: "In-depth profile showcases how ChargeTrux is helping reduce fleet emissions while providing flexible charging solutions.",
      date: "March 15, 2025",
      category: "Media Coverage"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog & News | ChargeTrux</title>
        <meta name="description" content="Stay updated with the latest articles, insights and news from ChargeTrux - the leader in mobile EV charging solutions." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="bg-chargetrux-darkblue py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Blog & News
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay informed about mobile charging innovations, industry trends, and company updates.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-chargetrux-darkblue">Featured Article</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <Badge className="bg-chargetrux-blue text-white mb-4">{featuredArticle.category}</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-chargetrux-darkblue">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-700 mb-4 text-lg">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
              <Button variant="viewDetails">
                Read Article
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <img 
                src={featuredArticle.image} 
                alt="Featured article" 
                className="w-full h-auto rounded-lg shadow-md" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog and News Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="blog" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-gray-200">
              <TabsTrigger value="blog" className="data-[state=active]:bg-chargetrux-blue data-[state=active]:text-white">
                <Newspaper className="h-4 w-4 mr-2" />
                Blog Articles
              </TabsTrigger>
              <TabsTrigger value="news" className="data-[state=active]:bg-chargetrux-blue data-[state=active]:text-white">
                <FileText className="h-4 w-4 mr-2" />
                Company News
              </TabsTrigger>
            </TabsList>
            
            {/* Blog Content */}
            <TabsContent value="blog" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden border border-gray-200 hover:border-chargetrux-blue transition-all h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105" 
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <Badge className="self-start bg-gray-200 text-chargetrux-darkblue hover:bg-gray-300 mb-2">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 text-chargetrux-darkblue line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" className="border-chargetrux-blue text-chargetrux-blue hover:bg-chargetrux-blue/5">
                  View All Blog Posts
                </Button>
              </div>
            </TabsContent>
            
            {/* News Content */}
            <TabsContent value="news" className="mt-8">
              <div className="space-y-6">
                {newsPosts.map((post, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-gray-200 text-chargetrux-darkblue hover:bg-gray-300">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-chargetrux-darkblue">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="text-chargetrux-blue hover:text-chargetrux-blue/80 hover:bg-chargetrux-blue/5">
                        Read More
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                    {index < newsPosts.length - 1 && (
                      <Separator className="mt-6" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" className="border-chargetrux-blue text-chargetrux-blue hover:bg-chargetrux-blue/5">
                  View All News
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-chargetrux-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8 text-gray-300">
              Get the latest updates, articles, and news from ChargeTrux delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md flex-grow bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-chargetrux-green"
              />
              <Button variant="ctaGreen">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogNews;
