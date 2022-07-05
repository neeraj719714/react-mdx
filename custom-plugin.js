const path = require("path");
const { visit } = require("./unist-util-visit-cjs.cjs");
const fs = require("fs");
const IDProvider = require("./IdProvider.js");

module.exports = function customLoader() {
  // write a custom remark plugin to add id to all headings in markdown
  const remarkPlugin = function (tree) {
    const idProvider = new IDProvider();
    visit(tree, "heading", function (node) {
      // if heading depth greater than 4, ignore it
      if (node.depth > 4) {
        return;
      }
      node.attributes=[{name:"id",value:idProvider.getId(node.children[0].value)}];
      console.log(node);
      return node;
    });
  };
  return remarkPlugin;
};
