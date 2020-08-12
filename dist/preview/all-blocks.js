new Vue({
  el: '#blocks-app',
  data: {
    showTemplates: false,
    templatesGroups: [
      {
        id: "",
        name: '',
        templates: [
          { pageURL: './blocks/0. Templates/template-4/index.html', img: './blocks/0. Templates/Reading-SaaS-Template.jpg', name: 'SaaS Template' },
          { pageURL: './blocks/0. Templates/template-2/index.html', img: './blocks/0. Templates/SaaS Template 2.jpg', name: 'SaaS Template 2' },
          { pageURL: './blocks/0. Templates/template-3/index.html', img: './blocks/0. Templates/service template.jpg', name: 'Service Template' },
          { pageURL: './blocks/0. Templates/template-1/index.html', img: './blocks/0. Templates/watch template.jpg', name: 'Mobile App Template' },
        ]
      }
    ],
    allGroups: [
      {
        id: "footer",
        name: 'Footer',
        blocks: [
          { pageURL: false, img: './blocks/12. Footer (4)/B41.png', name: 'Block 41' },
          { pageURL: false, img: './blocks/12. Footer (4)/B42.png', name: 'Block 42' },
          { pageURL: false, img: './blocks/12. Footer (4)/B43.png', name: 'Block 43' },
          { pageURL: false, img: './blocks/12. Footer (4)/B44.png', name: 'Block 44' },
        ]
      },
      {
        id: "blog",
        name: 'blog',
        blocks: [
          { pageURL: false, img: './blocks/9. Blog Sections (2)/B45.png', name: 'Block 45' },
          { pageURL: false, img: './blocks/9. Blog Sections (2)/B46.png', name: 'Block 46' },
        ]
      },
      {
        id: "faq",
        name: 'FAQ',
        blocks: [
          { pageURL: false, img: './blocks/5. FAQ (2)/B39.png', name: 'Block 39' },
          { pageURL: false, img: './blocks/5. FAQ (2)/B40.png', name: 'Block 40' },
        ]
      },
      {
        id: "contact",
        name: 'Contact',
        blocks: [
          { pageURL: false, img: './blocks/10. Contact (3)/B26.png', name: 'Block 26' },
          { pageURL: false, img: './blocks/10. Contact (3)/B27.png', name: 'Block 27' },
          { pageURL: false, img: './blocks/10. Contact (3)/B28.png', name: 'Block 28' },
        ]
      },
      {
        id: "stats",
        name: 'Stats & Numbers',
        blocks: [
          { pageURL: false, img: './blocks/11. Stats & Numbers (4)/B35.png', name: 'Block 35' },
          { pageURL: false, img: './blocks/11. Stats & Numbers (4)/B36.png', name: 'Block 36' },
          { pageURL: false, img: './blocks/11. Stats & Numbers (4)/B37.png', name: 'Block 37' },
          { pageURL: false, img: './blocks/11. Stats & Numbers (4)/B38.png', name: 'Block 38' },
        ]
      },
      {
        id: "brands",
        name: 'Brands & Logos',
        blocks: [
          { pageURL: false, img: './blocks/7. Brands & Logos (2)/B24.png', name: 'Block 24' },
          { pageURL: false, img: './blocks/7. Brands & Logos (2)/B25.png', name: 'Block 25' },
        ]
      },
      {
        id: "cta",
        name: 'Call To Actions',
        blocks: [
          { pageURL: false, img: './blocks/6. Call To Action (7)/B18.png', name: 'Block 18' },
          { pageURL: false, img: './blocks/6. Call To Action (7)/B29.png', name: 'Block 29' },
          { pageURL: false, img: './blocks/6. Call To Action (7)/B30.png', name: 'Block 30' },
          { pageURL: false, img: './blocks/6. Call To Action (7)/B30_S2.png', name: 'Block 30 - style 2' },
          { pageURL: false, img: './blocks/6. Call To Action (7)/B32.png', name: 'Block 32' },
          { pageURL: false, img: './blocks/6. Call To Action (7)/B33.png', name: 'Block 33' },
          { pageURL: false, img: './blocks/6. Call To Action (7)/B34.png', name: 'Block 34' },
          { pageURL: false, img: './blocks/6. Call To Action (7)/B49.png', name: 'Block 39' },
        ]
      },
      {
        id: "testimonials",
        name: 'Testimonials',
        blocks: [
          { pageURL: false, img: './blocks/3. Testimonials (5)/B19.png', name: 'Block 19' },
          { pageURL: false, img: './blocks/3. Testimonials (5)/B20.png', name: 'Block 20' },
          { pageURL: false, img: './blocks/3. Testimonials (5)/B21.png', name: 'Block 21' },
          { pageURL: false, img: './blocks/3. Testimonials (5)/B22.png', name: 'Block 22' },
          { pageURL: false, img: './blocks/3. Testimonials (5)/B23.png', name: 'Block 23' },
        ]
      },
      {
        id: "pricing",
        name: 'Pricing Tables',
        blocks: [
          { pageURL: false, img: './blocks/4. Pricing Tables (5)/B13.png', name: 'Block 13' },
          { pageURL: false, img: './blocks/4. Pricing Tables (5)/B14.png', name: 'Block 14' },
          { pageURL: false, img: './blocks/4. Pricing Tables (5)/B15.png', name: 'Block 15' },
          { pageURL: false, img: './blocks/4. Pricing Tables (5)/B16.png', name: 'Block 16' },
          { pageURL: false, img: './blocks/4. Pricing Tables (5)/B17.png', name: 'Block 17' },
        ]
      },
      {
        id: "features",
        name: 'Features & Content',
        blocks: [
          { pageURL: false, img: './blocks/2. Features & Content (15)/B8.png', name: 'Block 8' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B9.png', name: 'Block 9' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B10.png', name: 'Block 10' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B11.png', name: 'Block 11' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B12.png', name: 'Block 12' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B31.png', name: 'Block 31' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B31_S2.png', name: 'Block 31 - style 2' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B47.png', name: 'Block 47' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B48.png', name: 'Block 48' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B1.png', name: 'Block 1' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B2.png', name: 'Block 2' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B3.png', name: 'Block 3' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B4.png', name: 'Block 4' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B5.png', name: 'Block 5' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B6.png', name: 'Block 6' },
          { pageURL: false, img: './blocks/2. Features & Content (15)/B7.png', name: 'Block 7' },
        ]
      }
    ],
    groupsToShow: [
      {
        id: "hero",
        name: 'Hero Blocks',
        blocks: [
          { pageURL: './blocks/1. Hero (8)/Block-1/1. block.html', img: './blocks/1. Hero (8)/images/Hero1.png', name: 'Hero 1' },
          { pageURL: './blocks/1. Hero (8)/Block-2/1. block.html', img: './blocks/1. Hero (8)/images/Hero2.png', name: 'Hero 2' },
          { pageURL: './blocks/1. Hero (8)/Block-2/2. block.html', img: './blocks/1. Hero (8)/images/Hero2_S2.png', name: 'Hero 2 - style 2' },
          { pageURL: './blocks/1. Hero (8)/Block-3/1. block.html', img: './blocks/1. Hero (8)/images/Hero3.png', name: 'Hero 3' },
          { pageURL: './blocks/1. Hero (8)/Block-3/2. block.html', img: './blocks/1. Hero (8)/images/Hero3_S2.png', name: 'Hero 3 - style 2' },
          { pageURL: './blocks/1. Hero (8)/Block-4/1. block.html', img: './blocks/1. Hero (8)/images/Hero4.png', name: 'Hero 4' },
          { pageURL: './blocks/1. Hero (8)/Block-5/1. block.html', img: './blocks/1. Hero (8)/images/Hero5.png', name: 'Hero 5' },
          { pageURL: './blocks/1. Hero (8)/Block-5/2. block.html', img: './blocks/1. Hero (8)/images/Hero5_S2.png', name: 'Hero 5 - style 2' },
          { pageURL: './blocks/1. Hero (8)/Block-6/1. block.html', img: './blocks/1. Hero (8)/images/Hero6.png', name: 'Hero 6' },
          { pageURL: './blocks/1. Hero (8)/Block-6/2. block.html', img: './blocks/1. Hero (8)/images/Hero6_S2.png', name: 'Hero 6 - style 2' },
          { pageURL: './blocks/1. Hero (8)/Block-7/1. block.html', img: './blocks/1. Hero (8)/images/Hero7.png', name: 'Hero 7' },
          { pageURL: './blocks/1. Hero (8)/Block-10/1. block.html', img: './blocks/1. Hero (8)/images/Hero10.png', name: 'Hero 10' },
          { pageURL: './blocks/1. Hero (8)/Block-10/3. block.html', img: './blocks/1. Hero (8)/images/Hero10_S3.png', name: 'Hero 10 - style 3' },
        ]
      }
    ]
  },

  mounted() {
    window.goToSection = this.goToSection

    document.querySelector('[page-is-loading]').remove()
  },

  methods: {
    countBlocks(id) {
      var collection = this.allGroups.filter(function (obj) {
        if (obj.id === id) return true
      })[0]

      if (collection) return collection.blocks.length
      else {
        return this.groupsToShow.filter(function (obj) {
          if (obj.id === id) return true
        })[0].blocks.length
      }
    },

    viewMore(e) {
      if (!this.allGroups.length) {
        e.target.style = 'opacity: .5; cursor: initial;'
        e.target.textContent = 'no more results'
        return
      }

      var lastIndex = this.allGroups.length - 1
      var lastSection = this.allGroups[lastIndex]
      this.groupsToShow.push(lastSection)
      this.allGroups.splice(lastIndex, 1)
    },

    showSection(id) {
      var results = this.groupsToShow.filter(section => section.id === id)
      if (results.length) return
      else {
        for (let i = 0; i < this.allGroups.length; i++) {
          var section = this.allGroups[i]
          if (section.id === id) {
            this.groupsToShow.push(section)
            this.allGroups.splice(i, 1)
          }
        }
      }
    },

    goToSection(e, id) {
      e.preventDefault()
      this.showSection(id)
      this.$nextTick(function () {
        document.querySelector('#categories-mb-menu').classList.remove('ft-menu--js-show')
        setTimeout(function () {
          var element = document.getElementById(id)
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          })
        }, 250)
      })
    },

    /* ********************** PREVIEW ********************* */

    setMobileView() {
      document.querySelector('.responsive-preview').style.padding = '2rem 0'
      document.querySelector('.responsive-preview__iframe-container').style.width = '360px'
    },

    setLaptopView() {
      document.querySelector('.responsive-preview').style.padding = '0'
      document.querySelector('.responsive-preview__iframe-container').style.width = '100%'
    },

    getIframeDocument() {
      return document.querySelector('#previewIframe').contentDocument
    },

    getHTMLFromBody() {
      return document.querySelector('.component__wrapper').innerHTML
    },

    downloadComponent(e) {
      e.preventDefault()

      e.target.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(getIframeDocument().documentElement.outerHTML)

      setTimeout(function () {
        document.querySelector('[download]').click()
      }, 3000)
    },

    openPreview(src) {
      if (!src) {
        window.showPopup()
        return false
      }

      document.querySelector('#previewIframe').setAttribute('src', src)

      document.querySelector('.responsive-preview').classList.add('responsive-preview--show')
      document.body.style.overflow = 'hidden'
    },

    closePreview() {
      document.querySelector('.responsive-preview').classList.remove('responsive-preview--show')
      document.body.style.overflow = ''
    }
  }
})

function showPopup() {
  document.body.style = 'overflow: hidden'
  document.querySelector('.popup').classList.toggle('popup--show')
}

function closePopup() {
  document.body.style.overflow = ''
  document.querySelector('.popup').classList.toggle('popup--show')
}