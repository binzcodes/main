const RichTextResolver = require('storyblok-js-client/dist/richTextResolver')

const pick = function(attrs, allowed) {
  if (!attrs) {
    return null
  }
  const h = {}
  for (const key in attrs) {
    const value = attrs[key]
    if (allowed.includes(key) && value !== null) {
      h[key] = value
    }
  }
  return h
}

const headers = [
  {
    tag: 'h1',
    attrs: { class: 'display-4 primary--text py-6' }
  },
  {
    tag: 'h2',
    attrs: { class: 'display-3 primary--text py-6' }
  },
  {
    tag: 'h3',
    attrs: { class: 'display-2 primary--text py-6' }
  },
  {
    tag: 'h4',
    attrs: { class: 'display-1 primary--text py-6' }
  },
  {
    tag: 'h5',
    attrs: { class: 'headline grey--text text--darken-2  py-6' }
  },
  {
    tag: 'h6',
    attrs: { class: 'title grey--text text--darken-2  py-6' }
  }
]

const resolveHeader = level => {
  return headers[parseInt(level) - 1]
}

const schema = {
  nodes: {
    horizontal_rule() {
      return {
        tag: [{ tag: 'hr', attrs: { class: 'my-6' } }]
      }
    },
    blockquote() {
      return {
        tag: [{ tag: 'blockquote', attrs: { class: 'blockquote' } }]
      }
    },
    bullet_list() {
      return {
        tag: 'ul'
      }
    },
    code_block(node) {
      return {
        tag: [
          // 'pre',
          {
            tag: 'pre',
            attrs: {
              class: 'pb-6'
            }
          },
          {
            tag: 'code',
            attrs: node.attrs
          }
        ]
      }
    },
    hard_break() {
      return {
        singleTag: 'br'
      }
    },
    heading(node) {
      return {
        // tag: `h${node.attrs.level}`
        tag: [resolveHeader(node.attrs.level)]
      }
    },
    image(node) {
      return {
        singleTag: [
          // { tag: 'div' },
          {
            tag: 'img',
            attrs: {
              ...pick(node.attrs, ['src', 'alt', 'title']),
              class: 'my-6',
              style: 'width: 100%;'
            }
          }
          // { tag: '/div' }
        ]
      }
    },
    list_item() {
      return {
        tag: 'li'
      }
    },
    ordered_list() {
      return {
        tag: 'ol'
      }
    },
    paragraph() {
      return {
        tag: [
          {
            tag: 'p',
            attrs: {
              class: 'body-1'
            }
          }
        ]
      }
    }
  },
  marks: {
    bold() {
      return {
        tag: 'b'
      }
    },
    strike() {
      return {
        tag: 'strike'
      }
    },
    underline() {
      return {
        tag: 'u'
      }
    },
    strong() {
      return {
        tag: 'strong'
      }
    },
    code() {
      return {
        tag: 'code'
      }
    },
    italic() {
      return {
        tag: 'i'
      }
    },
    link(node) {
      return {
        tag: [
          // {
          //   tag: 'a',
          //   attrs: node.attrs
          // }
          {
            tag: 'a',
            attrs: {
              ...node.attrs,
              nuxt: 'true',
              to: node.attrs.href
            }
          }
        ]
      }
    },
    styled(node) {
      return {
        tag: [
          {
            tag: 'span',
            attrs: node.attrs
          }
        ]
      }
    }
  }
}

export function richText() {
  return new RichTextResolver(schema)
}
