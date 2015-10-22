(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

module.exports = require('./scholarly-article.json');

},{"./scholarly-article.json":2}],2:[function(require,module,exports){
module.exports={
  "@context": {
    "sa": "https://ns.science.ai/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "owl": "http://www.w3.org/2002/07/owl#",

    "sameAs": { "@id": "owl:sameAs", "@type": "@id" },
    "subClassOf": { "@id": "rdfs:subClassOf", "@type": "@id", "@container": "@set" },
    "disjointWith": { "@id": "owl:disjointWith", "@type": "@id", "@container": "@set" },
    "unionOf": { "@id": "owl:unionOf", "@type": "@id", "@container": "@set" },
    "comment": "rdfs:comment",
    "label": "rdfs:label",

    "defines": { "@reverse": "rdfs:isDefinedBy" }
  },

  "@id": "https://ns.science.ai/",

  "defines": [
    {
      "@id": "sa:Unspecified",
      "@type": "rdfs:Class",
      "label": "Unspecified",
      "comment": "A section that is unknown or otherwise unspecified.",
      "subClassOf": [],
      "disjointWith": ["sa:Abstract", "sa:Introduction", "sa:MaterialsAndMethods", "sa:Results", "sa:Discussion", "sa:Conclusion", "sa:Acknowledgements", "sa:ReferenceList", "sa:Reference", "sa:FootnoteList", "sa:Footnote", "sa:Formula", "sa:FormulaObject", "sa:Image", "sa:Video", "sa:Audio", "sa:Table", "sa:TableObject"]
    },

    {
      "@id": "sa:Abstract",
      "@type": "rdfs:Class",
      "label": "Abstract",
      "comment": "A brief summary of a book, a research article, thesis, review, conference proceeding or any in-depth analysis of a particular subject or discipline, the purpose of which is to help the reader quickly ascertain the publication's purpose.",
      "subClassOf": [],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:Introduction",
      "@type": "rdfs:Class",
      "label": "Introduction",
      "sameAs": "http://purl.org/spar/deo/Introduction",
      "comment": "An initial description which states the purpose and goals of the following writing, and, in the case of journal articles, typically includes background information on the research topic and a review of related work in the area.",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:MaterialsAndMethods",
      "@type": "rdfs:Class",
      "label": "Materials and Methods",
      "unionOf": [
        "http://purl.org/spar/deo/Materials",
        "http://purl.org/spar/deo/Methods"
      ],
      "comment": "A description in a research paper documenting the specialized materials and/or methods used in the work described. This description is contained in a section often entitled 'Methods and Materials', 'Experimental' or a related term.",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:Results",
      "@type": "rdfs:Class",
      "label": "Results",
      "sameAs": "http://purl.org/spar/deo/Results",
      "comment": "The report of the specific findings of an investigation, given without discussion or conclusion being drawn.",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:Discussion",
      "@type": "rdfs:Class",
      "label": "Discussion",
      "comment": "An interpretation and discussion of the results obtained and an analysis of their significance, in support of conclusions. These conclusions may be part of this discussion or may be included in a separate section of the document.",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:Conclusion",
      "@type": "rdfs:Class",
      "label": "Conclusion",
      "comment": "A reflection on the preceding text, summarizing the evidence, arguments or premises presented in the document and their logical outcomes. Conclusions are a fundamental feature in academic research publications, and may be included in the Discussion section.",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:Acknowledgements",
      "@type": "rdfs:Class",
      "label": "Acknowledgements",
      "sameAs": "http://purl.org/spar/deo/Acknowledgements",
      "comment": "Usually part of the preface, or a separate section in its own right, often as part of the back matter, it acknowledges those, including funding agencies, who contributed to the undertaking of a research project described in a publication, or to the creation of the work in some way. In scientific articles, the acknowledgements are usually placed as a separated section immediately following the Discussion or Conclusions.",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:ReferenceList",
      "@type": "rdfs:Class",
      "label": "References",
      "sameAs": "http://purl.org/spar/doco/ListOfReferences",
      "comment": "A list of items each representing a reference to a specific part of the same document, or to another publication.",
      "subClassOf": [
        "http://purl.org/spar/doco/List"
      ],
      "disjointWith": ["sa:Unspecified"]
    },
    {
      "@id": "sa:Reference",
      "@type": "rdfs:Class",
      "label": "Reference",
      "sameAs": "http://purl.org/spar/deo/Reference",
      "comment": "A reference to a specific part of the document, or to another publication.",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:FootnoteList",
      "@type": "rdfs:Class",
      "label": "Footnotes",
      "comment": "A list of items each representing a footnote.",
      "subClassOf": [
        "http://purl.org/spar/doco/List"
      ],
      "disjointWith": ["sa:Unspecified"]
    },
    {
      "@id": "sa:Footnote",
      "@type": "rdfs:Class",
      "label": "Footnote",
      "sameAs": "http://purl.org/spar/doco/Footnote",
      "comment": "A structural item that allows the author to make an additional remark, usually outside the main body of the text.",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:Formula",
      "@type": "rdfs:Class",
      "label": "Formula",
      "sameAs": "http://purl.org/spar/doco/Formula",
      "comment": "A unit of information expressed in mathematical, chemical or logical symbols and language.",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement",
        "http://schema.org/CreativeWork"
      ],
      "disjointWith": ["sa:Unspecified"]
    },
    {
      "@id": "sa:FormulaObject",
      "@type": "rdfs:Class",
      "label": "Formula Object",
      "sameAs": "http://purl.org/spar/doco/FormulaBox",
      "comment": "A formula object embedded in a web page",
      "subClassOf": [
        "http://purl.org/spar/deo/DiscourseElement",
        "http://schema.org/MediaObject"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:Image",
      "@type": "rdfs:Class",
      "label": "Image",
      "sameAs": "http://purl.org/spar/doco/Figure",
      "comment": "An image resource",
      "subClassOf": [
        "http://schema.org/CreativeWork"
      ],
      "disjointWith": ["sa:Unspecified"]
    },
    {
      "@id": "sa:Video",
      "@type": "rdfs:Class",
      "label": "Video",
      "comment": "A video resource",
      "subClassOf": [
        "http://schema.org/CreativeWork"
      ],
      "disjointWith": ["sa:Unspecified"]
    },
    {
      "@id": "sa:Audio",
      "@type": "rdfs:Class",
      "label": "Audio",
      "comment": "An audio resource",
      "subClassOf": [
        "http://schema.org/CreativeWork"
      ],
      "disjointWith": ["sa:Unspecified"]
    },

    {
      "@id": "sa:Table",
      "@type": "rdfs:Class",
      "sameAs": "http://purl.org/spar/doco/Table",
      "label": "Table",
      "comment": "A table resource (set of data arranged in cells within rows and columns)",
      "subClassOf": [
        "http://schema.org/CreativeWork"
      ],
      "disjointWith": ["sa:Unspecified"]
    },
    {
      "@id": "sa:TableObject",
      "@type": "rdfs:Class",
      "sameAs": "http://purl.org/spar/doco/TableBox",
      "label": "TableObject",
      "comment": "A table object embedded in a web page",
      "subClassOf": [
        "http://schema.org/CreativeWork"
      ],
      "disjointWith": ["sa:Unspecified"]
    }

  ]
}

},{}]},{},[1]);
