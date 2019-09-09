getCatList = function(collection) {
  let catSet = new Set()

  collection.getAllSorted().forEach(item =>
        typeof item.data.category === "string"
    &&  catSet.add(item.data.category))

  return [...catSet]
}

eleventyConfig.addCollection("categoryList", getCatList)