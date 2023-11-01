function getUrl(blogTitle) {
    const punctuation = /[,./~!@#$%^&*()_+{}:"';-=`]/g;

    blogTitle = blogTitle.replace(punctuation, "");
    return "https://www.blogposts.com/" + blogTitle.toLowerCase().trim().replaceAll(" ", "-") + ".html";
}

console.log(getUrl("Milan's Recipies"));
