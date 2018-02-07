import "./App.css";

import React, { Component } from "react";
import f from "tcomb-form";
// import t from 'tcomb';
import transform from "tcomb-json-schema";
import CaptureModelYaml from "../presentation3.yaml";
// import { promises as jsonld } from 'jsonld';

const js = {
  "@context": [
    "http://www.w3.org/ns/anno.jsonld",
    "http://iiif.io/api/presentation/3/context.json"
  ],
  id: "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork.json",
  type: "Manifest",
  label: "Patchwork hanging, Ann West, 1820, England. Museum no. T.23-2007.",
  metadata: [
    {
      label: "Creator",
      value: "Ann West"
    },
    {
      label: "Created",
      value: "1820"
    }
  ],
  summary:
    "This vibrant example of 19th-century patchwork depicts a mixture of biblical stories and scenes of ordinary people going about their daily business, revealing a glimpse of life in rural England. It is made from offcuts of coats and military uniforms, decorated with woollen appliqué (pieces of fabric sewn on to a larger piece to form a picture) and embroidered details, including the words 'Ann West's work', and the date, 1820 – a clue to the maker's identity.",
  thumbnail: [
    {
      id:
        "https://framemark.vam.ac.uk/collections/DM20170001/full/138,156/0/default.jpg",
      type: "Image",
      width: 138,
      height: 150
    }
  ],
  rights: [
    {
      id: "http://example.org/license.html",
      type: "Text",
      language: "en",
      format: "text/html"
    }
  ],
  attribution: "Victoria and Albert Museum",
  items: [
    {
      id:
        "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/sequence",
      type: "Sequence",
      label: "Default Sequence",
      items: [
        {
          id:
            "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1",
          type: "Canvas",
          label: "The Patchwork",
          width: 35539,
          height: 40172,
          items: [
            {
              id:
                "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1/content-annos",
              type: "AnnotationPage",
              items: [
                {
                  id:
                    "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1/content-annos/1",
                  type: "Annotation",
                  motivation: "painting",
                  body: {
                    id:
                      "https://framemark.vam.ac.uk/collections/DM20170001/full/1110,1255/0/default.jpg",
                    type: "Image",
                    format: "image/jpeg",
                    width: 1110,
                    height: 1255,
                    service: {
                      id: "https://framemark.vam.ac.uk/collections/DM20170001",
                      type: "ImageService2",
                      profile: "level1"
                    }
                  },
                  target: {
                    id:
                      "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1",
                    type: "Canvas"
                  }
                }
              ]
            }
          ],
          annotations: [
            {
              id:
                "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1/marker-annos",
              type: "AnnotationPage",
              items: [
                {
                  id:
                    "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1/marker-annos/1",
                  type: "Annotation",
                  motivation: "describing",
                  body: {
                    type: "TextualBody",
                    value:
                      "<h2>Variation 1</h2><p>HTML, heading provided by markup</p>",
                    format: "text/html"
                  },
                  target: {
                    id:
                      "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1#xywh=5000,5000,500,500",
                    type: "Canvas"
                  }
                },
                {
                  id:
                    "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1/marker-annos/2",
                  type: "Annotation",
                  motivation: "describing",
                  body: {
                    type: "TextualBody",
                    label: "Variation 2",
                    value:
                      "Plain text, heading provided by label on annotation. NB the Anno spec only has label on heading provided by markup, so this might be less pure.",
                    format: "text/plain"
                  },
                  target: {
                    id:
                      "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1#xywh=10000,10000,500,500",
                    type: "Canvas"
                  }
                },
                {
                  id:
                    "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1/marker-annos/3",
                  type: "Annotation",
                  motivation: "describing",
                  body: {
                    type: "TextualBody",
                    value:
                      "<h2>Variation 3</h2><p>HTML, heading provided by markup. A bigger and non-square highlight area.</p>",
                    format: "text/html"
                  },
                  target: {
                    id:
                      "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1#xywh=15000,15000,900,4000",
                    type: "Canvas"
                  }
                },
                {
                  id:
                    "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1/marker-annos/4",
                  type: "Annotation",
                  motivation: "describing",
                  body: {
                    type: "TextualBody",
                    label: "Variation 4",
                    value:
                      "A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text.",
                    format: "text/plain"
                  },
                  target: {
                    id:
                      "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1#xywh=20000,20000,500,500",
                    type: "Canvas"
                  }
                },
                {
                  id:
                    "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1/marker-annos/5",
                  type: "Annotation",
                  motivation: "describing",
                  body: {
                    type: "TextualBody",
                    value:
                      '<h2>Variation 5</h2><p>HTML, heading provided by markup. <img src="https://picsum.photos/200/300/?random"/></p>',
                    format: "text/html"
                  },
                  target: {
                    id:
                      "http://digirati-co-uk.github.io/canvas-panel-proto/tests/patchwork/canvas/1#xywh=22000,6000,1000,2000",
                    type: "Canvas"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

import RefParser from "json-schema-ref-parser";

const transformedType = RefParser.dereference(CaptureModelYaml).then(json =>
  transform(json)
);
transform.registerFormat("uri", x => true);
transform.registerFormat("date-time", x => true);

const Form = f.form.Form;

class App extends Component {
  state = { originalJson: js, jsonType: null };

  componentWillMount() {
    transformedType.then(jsonType => {
      this.setState({ jsonType });
    });
  }

  render() {
    const { jsonType, originalJson } = this.state;

    if (!jsonType) {
      return <div>loading...</div>;
    }

    return (
      <div className="App">
        <h1>hmm</h1>
        <div className="row">
          <div className="col-sm-8">
            <Form
              value={originalJson}
              onChange={j => this.setState({ originalJson: j })}
              type={jsonType}
            />
          </div>
          <div className="col-sm-4">
            <pre style={{ textAlign: "left" }}>
              <code>{JSON.stringify(this.state.originalJson, null, 4)}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
