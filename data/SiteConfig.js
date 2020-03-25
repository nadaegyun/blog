const config = {
  // Site info
  siteTitle: "Round Angular", // Site title.
  siteTitleShort: "Round Angular", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Round angular blog sharing daily life and what else", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://daegyun.netlify.com/", // Domain of your website without pathPrefix.
  pathPrefix: "/blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Trial Gatby blog and sharing information I found recently.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UUA-134200534-1", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 6,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: false,
  disqusShortname: "daegyun", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", // 
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "010356671340023228016:gikute0haba",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    // {
    //   label: "Complete JavaScript",
    //   url: "https://completejavascript.com/"
    // }
  ],
  // Use for user info
  userName: "Daegyun", // Username to display in the author segment.
  userEmail: "daegyun.na@gmail.com", // Email used for RSS feed"s author segment
  userTwitter: "@NaDaegyun", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Yongin, Korea", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Project Manager in automotive, Lover to learn new", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Website",
      url: "https://github.com/nadaegyun",
      iconClassName: "fas globe"
    }
  ],
  // Use for navigation
  navTitle: "Round Angular",
    navLinks: [
    { label: "Post", url: "/post" },
    { label: "Photo", url: "/photo" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  // Use for footer
    socialLinks: [
      { 
      label: "Facebook", 
      url: "https://www.facebook.com/daegyun.na.5", 
      url: "https://www.facebook.com/daegyun.na.5", 
      iconClassName: "fab facebook-square" 
      },
      {
      label: "Twitter",
      url: "https://twitter.com/roundangular",
      iconClassName: "fab twitter-square"
      },
      {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/daegyun-na-86920993/",
      iconClassName: "fab linkedin"
      },
      {
      label: "Instagram",
      url: "https://www.instagram.com/daegyun_na/",
      iconClassName: "fab instagram-square"
      },
      {
      label: "Youtube",
      url: "https://www.youtube.com/channel/UC0yValXPtImjTQ8_6Z0Ha4Q?view_as=subscriber",
      iconClassName: "fab youtube-square"
      },
      {
      label: "GitHub",
      url: "https://github.com/nadaegyun",
      iconClassName: "fab github-square"
      }
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Release note", url: "/release" },
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Sitemap", url: "https://github.com/nadaegyun/sitemap.xml" },
  ],
  copyright: "Copyright © 2020 Daegyun Na. Unless otherwise noted, all code MIT license.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF", // Used for setting manifest background color.
  headerImage: [            //Index page header image
    '/image/main_20200323.png',
    '/image/photographybanner-new.jpg'
  ],
  headerDescription:'just code it and record life'  //index page header description
  
};


// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
