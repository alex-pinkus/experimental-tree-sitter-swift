const Parser = require("tree-sitter");
const Swift = require("experimental-tree-sitter-swift");

const parser = new Parser();
parser.setLanguage(Swift);

const sourceCode = `
struct HelloWorld {
    func a() {
        print("Hello, world!")
    }
}

HelloWorld().a()
`;

const tree = parser.parse(sourceCode);
console.log(tree.rootNode.toString());

const assert = require("assert");
const smallTree = parser.parse(`_ = "Hello!"\n`);
assert.equal(
  `(source_file (assignment (directly_assignable_expression (simple_identifier)) (line_string_literal (line_str_text))))`,
  smallTree.rootNode.toString()
);
