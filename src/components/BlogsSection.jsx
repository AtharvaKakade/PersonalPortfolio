import React from "react";
import { ArrowUpRight, Calendar, Clock, User, Tag } from "lucide-react";

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Building Scalable REST APIs with Spring Boot",
      excerpt:
        "Learn how to design and implement robust REST APIs using Spring Boot, including best practices for authentication, validation, and error handling that ensure your backend can scale efficiently.",
      image: "src/assets/images/Gemini_Generated_Image_8kotyh8kotyh8kot.png",
      date: "2025-09-19",
      readTime: "5 min read",
      author: "Atharva Kakade",
      category: "Backend Development",
      tags: ["Spring Boot", "REST API", "Java", "Backend"],
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      featured: true,
      link: "https://java25.hashnode.dev/building-scalable-rest-apis-with-spring-boot",
    },
    {
      id: 2,
      title: "Java 25: A Deep Dive into the Latest LTS Release",
      excerpt:
        "Java 25 marks a landmark LTS release, simplifying syntax, introducing scoped values, boosting performance with AOT compilation, and strengthening security with PEM support—all supported until 2028.",
      image: "src/assets/images/Gemini_Generated_Image_lqbctclqbctclqbc.png",
      date: "2024-09-15", // adjust to your actual publish date
      readTime: "15 min read",
      author: "Atharva Kakade",
      category: "Programming",
      tags: [
        "Java 25",
        "LTS",
        "Performance",
        "Scoped Values",
        "AOT Compilation",
        "Shenandoah GC",
        "Security",
      ],
      gradient: "from-orange-500 via-red-600 to-pink-700",
      link: "https://java25.hashnode.dev/java-25",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-3 pb-2">
            Latest Blogs
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and insights about full stack development, system
            architecture, and software engineering best practices.
          </p>
        </div>

        {/* Featured Blog */}
        {blogs
          .filter((blog) => blog.featured)
          .map((blog) => (
            <div
              key={blog.id}
              onClick={blog.link}
              className={`mb-16 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${blog.gradient} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Featured Blog Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"></div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                      Featured
                    </span>
                  </div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Featured Blog Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 bg-black/60 backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">
                      {blog.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {blog.title}
                    </h1>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </a>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(blog.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Regular Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs
            .filter((blog) => !blog.featured)
            .map((blog) => (
              <article
                key={blog.id}
                className={`group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${blog.gradient} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30`}
              >
                {/* Blog Image */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"></div>
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold border border-white/30">
                      {blog.category}
                    </span>
                  </div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 bg-black/60 backdrop-blur-xl">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-gray-200 transition-colors">
                      {blog.title}
                    </h3>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(blog.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20">
                        +{blog.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <a
            href="https://hashnode.com/@atharvaKakade"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Load More Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
