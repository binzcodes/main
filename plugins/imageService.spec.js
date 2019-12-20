import { transformImage } from '@/plugins/imageService'

describe('imageService', () => {
  test('replaces a.storyblok URL', () => {
    expect(
      transformImage(
        '//a.storyblok.com/f/39898/1000x664/ab64dad3bc/flowers.jpg',
        '500x500'
      )
    ).toBe(
      '//img2.storyblok.com/500x500/f/39898/1000x664/ab64dad3bc/flowers.jpg'
    )
  })

  test('returns other URLs without change', () => {
    expect(transformImage('//a.test.com/logo.jpg', '500x500')).toBe(
      '//a.test.com/logo.jpg'
    )
  })

  test('returns placeholder image when passed no image', () => {
    expect(transformImage(null, '500x500')).toBe(
      'https://picsum.photos/500/500'
    )
  })

  test('returns image when passed no option', () => {
    expect(
      transformImage(
        '//a.storyblok.com/f/39898/1000x664/ab64dad3bc/flowers.jpg'
      )
    ).toBe('//a.storyblok.com/f/39898/1000x664/ab64dad3bc/flowers.jpg')
  })
})
