(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2qYH":function(t,s,e){"use strict";e.r(s);var a=e("A6W1"),i=e("BA+P"),r={components:{Author:a.a,PostCard:i.a},metaInfo:{title:"Hello, world!"}},A=e("KHd+"),o=null,n=Object(A.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("\n    # "+this._s(this.$page.tag.title)+"\n  ")]),s("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof o&&o(n);s.default=n.exports},"7qvl":function(t,s,e){},A6W1:function(t,s,e){"use strict";var a={props:["showTitle"]},i=(e("ArLL"),e("KHd+")),r=e("Kw5r"),A=r.a.config.optionMergeStrategies.computed,o={metadata:{siteName:"Frontendor Blog"}},n=function(t){var s=t.options;s.__staticData?s.__staticData.data=o:(s.__staticData=r.a.observable({data:o}),s.computed=A({$static:function(){return s.__staticData.data}},s.computed))},c=Object(i.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"author"},[s("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:e("MnP5"),width:"180",height:"180",blur:"5"}}),this.showTitle?s("h1",{staticClass:"author__site-title"},[this._v("\n\t\t"+this._s(this.$static.metadata.siteName)+"\n\t")]):this._e(),s("p",{staticClass:"author__intro"},[this._v("\n\t\tWe write about marketing, sales, side projects and entrepreneurship for developers and tech people.\n\t")]),this._m(0)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"author__links"},[s("a",{attrs:{target:"__blank",href:"//twitter.com/Frontendor_"}},[this._v("Follow on Twitter")]),s("a",{attrs:{target:"__blank",href:"//frontendor.com"}},[this._v("Website")])])}],!1,null,null,null);"function"==typeof n&&n(c);s.a=c.exports},AO8t:function(t,s,e){},ArLL:function(t,s,e){"use strict";var a=e("AO8t");e.n(a).a},"BA+P":function(t,s,e){"use strict";var a=e("n6yM"),i=e("PpWc"),r={components:{PostMeta:a.a,PostTags:i.a},props:["post"]},A=(e("YDir"),e("KHd+")),o=Object(A.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[e("div",{staticClass:"post-card__header"},[t.post.cover_image?e("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),e("div",{staticClass:"post-card__content"},[e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),e("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),e("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),e("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=o.exports},GsXb:function(t,s,e){"use strict";var a=e("7qvl");e.n(a).a},MnP5:function(t,s){t.exports={type:"image",mimeType:"image/svg+xml",src:"/assets/static/logo-shape.e6b6009.7e46498a2ead908c5a1df97e5933b71d.svg",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/assets/static/logo-shape.e6b6009.7e46498a2ead908c5a1df97e5933b71d.svg 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-b8b3da6309ff87ab97f8235ef5a9f771'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-b8b3da6309ff87ab97f8235ef5a9f771)' width='180' height='180' xlink:href='data:image/svg%2bxml%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAVzElEQVR42r2beXAk1X3He6Ut%2bz%2bcE7vCsav7Xl2rA90LlQrGR7kMCyy7ujXSjO5rb3BSIaYcE2wHSCVmwf8kKRMHQgATSJn/DMYxDnEloQqbGFJhZ6Z7enpG0korqXu6X36/d3S/7plZjTg8Vb96bySNNN9Pf3%2b/996vR4ryER4zXaqy0KHT%2bVxnQlno1IsWb9GL5Z%2bZ60wWL3cnK5d7kl9Z6k6eh/H7EL%2bASCz3JnchMst9yfWVXuNXK33GK6t9qW/AOLzSb7St9CSvk3/Xmf7UgdV%2bo3i1P0mfw1w502cov/HHXHtKmefCZ45qOC9e7DAOiO8vdOnXLXYl71zsMp5a7E6%2bA8Kts3075MKATc7175LTvVfISm8awuCRIqf7N8i5gW1y8VaHXLg1Q84MbBAAEV/tM16CmF8dMCrl9wDiDyIANk8qK7etK4SQT178fHsCABgchF4032EUucI79Y6FW/RLENqZ3h1yrs8iqz2bZKk7RQBGBkCYCAOuvr3Uk3QwljF6kw6AsNENK71JE%2bYWiHfODFwBGBa5eJtNQKwF8erpfuPkSm/i0xKI4tVjaTo/PWAoS5%2bUI%2bbbVWWuLcGEtyEE/aArvEO/db5T/9FS1xo522ORZRgBQgbSwVq8BcR2gdguw1nsNhwAAEBAdLdBQDxZ6mEjguCOYEAAAEKBq29BWoD4NMAwAUYG3GK8D8KXFvv1T1Hh/cYBcEgRnysw/3jFz7bpsviiyc4t7oBkNdj/hZWuTbLavUPmO5M2uMAC8fZiZ9IB8Q7MncUuHecEQEAY6AbCQRAKolsCwdMCIbgg%2bgwCEGBMZaA2WGcHNsn9tznoivdW%2b1MnXDcMGAc9ZySV48c/hpSYadXA2gYHkTgopcKF%2bXY9s9plkvmOZAZAWCDeWehMAgg6ongCIMANGDDH6GIgFnOAWMoNgkggHAABtSGFzjDPHduijgDhL60MGDcyB6TcIolugJ/9KOITnguOMvFzbdoN4IIfn%2b7KkPl2ENuuW3MdSQcCQOgOBoeAjiALnUI8B9HF5i6IboPNXTcACJoSIjU8ECs0EAIH0W9ksDZQCP3GBoA4ju9xpW8Da8MBb6VI71/8dKvOxwSAYPkODhiASK907hBIC3O2PeFALSAQDoCAeZJwEDQWOhgICqET3SBAoBM8N9C06M6XFly8DKLP4CBShDnCMHHVwBoBgh%2bSCmQRAwJO6N2HE6abNDa26MpMi1bM3XByri0NV3wNxCfMuTYQ3qY7AAKEJwgLHR1BEMQ8B7GQCwQ6oBAQPTnqQ4%2bbFhSClBYZjAduIwjh%2by6EPgYBRiXSp%2b4tPtysKdO84E23MNvDOL7YtkVmjyYhEpnZozqMXHxbAkGQWSqcgUAIKN4HAlMiB4ic9aE7UB96WFrkrQ8sLVih7E%2bZ9yOEPuNFCQJLh949VodIg6ZE3KsvxGv3LYB4SAOMDI6zrQlnBgDMHE0QCoNDcEG0SW5wQfC0kOvDLR4IIZalgKgBIgWMgBsYiJVeX1rQZZTXh12EAF97NghhpS%2bZTz5Rwo1MfKRZo%2bIjLYljsy0pMtMC4lsSID5BoDY4MzQSCIIACEJBoPij3A0URCIAwnODWx9wBPH4mkijTv/OdIvO/x6C1qnrZlrZa1Gg5wh3/8BBuKsF4cum%2bQCD8DgV3p8qgg0UuCCtLPXmgBDmVx5GmjORI%2bqNACI925omACIDjoA3p1HhOOeOYOI5iNkcIBgEnhbB%2btDJxJ/7Q4N8cyhNHrwrRb5%2bTzDS5Bsn0%2bT%2bO1IUhA9Ct5Fv/yDqg3XxVhshhHkxpBd2JQhgoiGmTNVryhRAuNiZFiBeW2jdJgDBnG5OwJhwQDiEhm4gfhAJJl4A4SDc%2btDmTwsXBAdw9jaDvP9fJsGHZTrEcYgbtu3Qr2%2bu2eSR0TUSPqLTK0yLZrfBQcg7SrGbpK6w%2bSqB0cjEG7Sor3ZL9WDqCKuOkAIH%2bXhxsdUi4aaEGUHxTSC8WXM4CHQC8YEQbhAgCk2LduaCSDOKSpL//W8GIWMx0eLhcAg7Vx3yFyMeBLF/WPJtq91l0%2bGOsPCQBfP/EHrhe5AGurLaBUv9VJ3GITDrTx7RagCAHWnCvNQcKIoOgHDACQiCTOOYAwRNERnEXvWBL5sUwi0MAr5xAYE5wQsBZZdCSEsQ8i6b6AIBwcRTJjjiImqE5/RCw8oCgqHyTx6JwVVPFHE3vDjfvE2mGjULvkao%2bEYNRxr7ApGjPvjSQgKBEKYDEIRoBECfZyQIw34Iwf0DTwtx2rRX6fE7eXWlJ3kzhdCTPHC%2bZ41ZYrJBLebjrTON6wQgZMAFzhQNEE5BoHAGAkcqvJmDaOHzfPWhVaSF7qZIFgh4jnuB/UB4GJwwdSRBV4DFwLZa2j84fDk1Lxyz0RmXeBqwxk24IaFMNqoHOIBXZ5u2yFSDZkFKAGHVARDoBgYBAt3ggpDcQOtDC5/7QORJi6PBtGBQFnwQrH1DcHeT/vMF7z2kEIC13KuXCxcok/Uqy/16tSPckELx9lSD6kAtcBACuAFBQGSDCOcAEREg5LRozZ0WOesDQujUKdCCIUA6TDWwn89z7Hb4smmeH7DRFd9iAMAFk/Vsrx%2bqVy/NNu4QcIEFdQFBODAndC5ANPK5AIGpINcHNzX89WFGAuHbP8hpganggmAQEOpyj15YOvgg5NxWYzMGasEGzuNL3brXbxyvjf9WqE5NhOsNAiDsUL0kHkcQzUCoPhCuG4L1oUmqD8056kO%2bZVPaVuM4vw8IOwEIwYMW70ZhWOf6TUyFe72NUG38zumGTRKq06zJOhBfrzoAgoA70BHoBheELy3k%2btCUvz5EctSHPZdNnhoCwtJ%2bINQHIHhpgW0562yfhS54Rgbw1EzDNpmoUy1wAogH4XUQAIGCaAiAaPCDmPIVSn7VXctLcTTh7hTp8xZvtRB7Ajf4mQEDReDP7QfCJELoZhCk06YDIOyVnnWcqwDmM8pEVbQYALwTrk%2bDA%2bL2RK3qAAiYo3gEwSDQOYXBQOSrDygenTNSrpLRCh6VLMYwqlQyAl%2bbqOVu4HDGqzUWNRqZkKOWjWht1wlvs8JoZ/JD%2bOYg7BPggIVFEOsJP3Y7i7RHmbRP92xhbTimTNTEK8dr4hYIJ1R8bdwBEOgGwkBorngKokGAkNKCz9HiKBCWGfLYzBr5zlSa/GXYi0cjafKdUJr8zdIaeeiEwdzSpNHX4fcfm14jj0LgiK9/HOLRyBr5q3n2Nbo6NLGNU/x9DsH2dosyBHTIg3em6DKMdUBqy2GT1jrXm8Hn55Xx6vhXwnVXgLKaARAOBwERJwKEcEMomBb1nhsw5/EqL/cmSOzXFrnW4%2bqmTR66N0VCtex3vvHiNtnr8Xd/ukHdhW64dHqd7G57V1%2bIl7fMb/1oh9aB%2bXbRgHEhYIfaOtNrYn/yaWWsOn4%2bUrcD9lPNCQRQo4IN40SACCGIWj8ITItJnhYIA68iWn0JxMff89ZtPMTQKwSBe3t8rOk2eeCLSTJcxtz1Uy4er5wt/Tx9PRf21Ll1cBa4q1IjT55dzzokBcX//F93qP2xttAGjL8th93qzGr3FgJ5Sxmrij8drt0kAMIaF%2bJxBNEeCO6GWn9aIBC0Meb0Uo9fvC83%2bfP1pE2%2b9iWD1gf5ygux4udtSdj3znPxEE%2be8cTb%2bcS/Akf4RraU0n5DoP8AR3AHQNjLXRsI4AME8ItQTQodYAMEZwxEwzwAIjstMLDyo5il7r3Fbxgo3rvyb7zgF59L2FNUPCuclwoSv0NXIrp8duj%2btpyvGwWFsDONjkgro5Uxfbw6AX8ExMMfQvEAgjA3%2bEHI9QEr/3BZHApMAVfe4LYvxXRSCxMPtherx6XTa3uKfxPE45kAVxQUOduWIFndaq8t5yx0GghiRxmtiu2CeDJKAcQRBHMAQPBAMAgoHudY9IZKUbxWkO1RPP48/q43XrhamHi%2bhBYmfpsuk7jvQLHibJG3LdcBacBAZNAB1mglCo85Y5UxBEEYCDUbRDUXXxKH/ClM/P1fSJLBEvb6nzy/t3gscphWWFeeOL237d98eYduenCjhIJn3P6Dnn3s9rpRFADUB1sZqYitM6vFHA4CIGSDQAhY8QcPg/hOSbyZX/zFO5L05/H1hYofRvEQT6wWIn6bbrrwrEHPE1JPco9utYO39QCGiQDeHa/UyUhlzB7hEGQQIi2w4qOY%2bYLEZ8jFz%2bvk1CF0D9i%2bEPFn1mhNwSL53ZW9bf8zEI/FFJdgFDi9v2M3ADAQxIYyXB57ZaJyDSwXy4xWxHEkHgQcY7TonToUg9zZj3iAB7%2bjkCt/CcRjjcAoSPy/bNNNFIpHy0f4IUs%2baPm7UVltOXuhPY1uUBHAn09WXQXbxcyRirgzygEwEDFa9E7eFAW7qO4OLyhe7MlR/IXbdXLfjex3FCQeihw65dTNcfLXi2l3g4MbJ9wc4WsxxEYKxeNuEPcfKJRtpQvrRvFjtwMg7MX2KwjiHWW4LDYcqtwEAHFruCLmAAgQD1e%2bgtWBodIYLXjR/8ktXuzG0hoTf/KmGK0Vr/1TYeJP3syW17/9k/U9t8P/9tI2PSxhdwpFh3kD5prH7tasYzfe0rOWOrbRES8rQ%2bXRttHyBBQfFB93cAQQDEIls/4vf7bLOi87/v23vHv7s7uT5J7PxaiNn/3WBv2auRNwiiT%2biVUQf1Oc5vHqQIK89txV8hNYIn/87FXy%2bnNeIMifvniVvPTEJj9/MKFht/cg9R%2bar9GW8%2b5mIQBzpcNCIA8rg6WXrxsqi8ZHy3WEYA8DBACBcxfAg8eTZGvDzlryMISoX/18F36hRk5BoVzs1sgv39x1%2b/vZ4tPkxA0xupliByyNFlhMBVwyMYZE8NqAc3rsbhJtuURWWy6SA8S03JZrZXe3AIK11L6Nz%2b%2biDZGh0uhLE%2bUbBEBYkBIOBGEQ6AaJHL8%2bSr72ZZ1sb9o5131RA977TxP%2bqEpO/EEM3pBK3v13BsHc9cRjkcPvM/HettrrLWhSg4UHv9Ki95CzLde4V1tOY/c2KYAkpsY2xCEKYLA0Oj9RsQVb1RgAiCIITAWCIHBpwg3Q3Z%2bLkge%2blB%2bCuNIIAYljIQw3qtQZsvh7QTxupq517J50%2bw8a70ZpH09brpne4sssHN3ElHjdbYkNlkQrAIJFrYYOKI05QxREjAgQFMJnC4cQaVEphAg44R2oId%2b7sAavj1FhdFuNhy7pfIEQQu5pUxy7gyDy9Ccb1UC3OmfbXtzbNJfaTIRyltv/8gEO4dWxsnUyCC4YogBAeCl1A3fC/iFgGpy8OUZ3kwgXhY/xLTU9YdYwB2SdNrNABNtyWv62XGOgPnhpgfc3HZ4WFhTJCnH1i/l4crz8ChSbqDVYgtU86uASyMQzEAhlbL8QGuMIlQqQt9X0fBE8dtfmPnbT/kNddltuKtiWy5UWrD44EXrvQrPoLf8m7UX2EQC9SDlVEqMgTh6OfQogvDdShie3qA0QHHzjQ%2bgCBFHqgRirjpG7ry8cwtQRrOxsRxk8XwRPnL60yFUf8rTlctYHLy0cDACRmWvZRBC3889AFAddsDBRvoWCTRQ9hBDgjQdB4BwhHHed4OwLAj1oofAq6bTpuoGDqAnWh2ChVKX6cM20cHh9sOZatvA5LX7h1uSBcIMKV740isIpiFOHPkAX/HqkzIA3G80MlfJUQAglHgRMBQoBDkvHr7/84SDws8ZYdeDYvVc3qjZPWvhAuHezQLxKA4RnZpuvIJg/oh8DaORXf7gkHnTBPeNlV1AgFkPCU8Hhcz8ICcL9X0wUlA6TDQDhsIAgHburpbTYqy1X668PvrTwg2BXv0Ez55q3MS2eEx8GCTdF3Q%2bFUQecLI0pUPWL%2bPMfjpdvogtMJjzqMOEsvLTIDwE3P%2bIggyHa2O%2b%2btUuF3XdjlI4MQhCEvzbkrA%2b50sJfHxwOwcYPUgCUbYB/mAJoYHfEw0f4R4Gh0gsQAsANEOvDpYnsVBDCXTcwCCji%2bO9DOkgQ8j20/7PIcq9GXyv6DWM53JCzLZdj/5Bj2eT3N%2bmmypxrone9w1z8QZYC0qdG8T8tRB2A8SAf78R9AbzJDDpAOCHLASXieZReTeqELyTI849vkGceWSfPfnvDFz94eIO8/OQm%2bXbIoOeM0ao4kZswudpyY4XWB5YWToje4KVu2J1r3EVH/AP9DESjVgQAlXCDBlc/7v%2boHAhyIYAwUQ%2b%2bHirfRrFmEIIAMeQDEaV9hBM3RMlXf/syufN35YiSuzB%2bD773O5fJiRu9vsNIJYtgN0qsFtcEUePrVuNtPSfE3GBOH8E73urbE7Ux%2bh8mMBefhMn9WdEh1wWXlZFSVewQ/x4hgMhdF0KpB8GXFgwQ3TzR3JZDbrFVM6HDvPdAmy84IhABwk0L7zVZbftqVV42HXZvk%2b4fzHD9GrpBn6jTbuLii/knYa79eeFTIJ5DOCCdFZ7nEIJOyA1CSguxbAa31XjaFMfukSCIQFuugPqAt/Qc3rY3p%2brW0A3rEHX09n8dy3tIBSXSsAeAP1Z89aBIgvAMhVASg61y1BZL5JDshjwg3E2UtK2%2bFgh/W06qD1mrheqwu1niJo66G6m7ghB0%2bB4TX8vF16nKWJ1a2P8LDJXF80F4bAKWRzzYwNzioh25LuSqD1m7SRlEuQcC%2bw%2b0GyWBGAk6wls28UaOw9yAt/VUk93kjb8NAKjtYTzIPwCihGq1/f3HCC6NEgQ5HSZR8FjZmkgJW4AYKtnbDUEQvmN3ecx1w3BFMC3c%2boCte3ETByGYeGsvUruDKfGDkZr4p5l4duVhtYBQP9z/DA3iNrnUgyCtDkcg3poovwq5rfpqA6YES43C0mIocNoUENy0qHDdQIWzXiWdZ0B8JlyzhSC2YR5xP/RVEy9m4lX8/MNH%2b6%2bxU5/10uG%2bQx%2b4%2bwQO4jxc9S12gMLeXZQ5QhTIQKHMSouS3KdNqT6wRi3tVlM3YNseb%2bVlQlXrJFS1hjD%2bGb5Wgu9nrEYrAhcc4BCw1ffx/e8gLo3w5nznBj6/CeK7uG1GECOwewRBWChpscQlc9BzhcNqxjXqA%2btG0eD9SRSfgfpg4v3CUBWs7SAeYLwBcbt4H%2bCAg2PV7P0BBGWiMq587I%2bhwzFYJl0IQTeUQTwCEcfDFDZXcCsNlrclIJlB2muIOiLYFps/L8V6AlEWs2DZNGmTthyKXMU6mazcxuIIz2M/hLhD/F1wQBEGh4DPP/n/Hx4uU5VThz9wa8Mgrw38%2bXUQd0P8I4Q2CkdrdAYerkbL0uAQHcBoPGWEE%2bK0lqB7RstS8LMbJFRxlWCnGkBsA4jXQfT5kbJYhSu8KoH3NYtDdexAA5soGr%2bxx9ChGOwcLyv3la17RVJKDbapin4GruoxiPPw/aexcML8AxjTEDvsoEUdgbVjA76nwvgOxMsQD8P3jgOAQ/LvBJFFAKN4pII5EebKaMWHz/X/B3rOsvMoa%2bQiAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}},NAO6:function(t,s,e){},PpWc:function(t,s,e){"use strict";var a={props:["post"]},i=(e("GsXb"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return e("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[e("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=r.exports},YDir:function(t,s,e){"use strict";var a=e("NAO6");e.n(a).a},YIUa:function(t,s,e){"use strict";var a=e("hpwU");e.n(a).a},hpwU:function(t,s,e){},n6yM:function(t,s,e){"use strict";var a={props:["post"]},i=(e("YIUa"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[e("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=r.exports}}]);