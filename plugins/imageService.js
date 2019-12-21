import Vue from 'vue'

// https://www.storyblok.com/docs/image-service
export const imageService = function(image, option) {
  if (!image) {
    const opts = option.split('/')[0].split('x')
    const height = opts[0]
    const width = opts[1] === '0' ? height : opts[1]
    return `https://picsum.photos/${height}/${width}`
  }
  if (!option) return image

  return image.replace(/a.storyblok.com/g, 'img2.storyblok.com/' + option)
}

Vue.filter('imageService', imageService)
