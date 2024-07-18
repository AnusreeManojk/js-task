const microsoft = {
    pageTitle: "Microsoft Teams - Group Chat Software",

    header: {
        menu: "icon/menu-horizontal.svg",

        logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",

        teamtext: "Teams",
        features: [
            // {
            //    logo:{
            //    src: "(https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31)"
            //    }
            // },
            // {
            //     title: "Teams",
            //     link: ""
            //     // icon:"icon.svg"
            // },
            {
                title: "Products",
                link: "",
                icon: "/icon/arrow-down.svg"
            },
            {
                title: "Features",
                icon: "/icon/arrow-down.svg",
                link: ""

            },
            {
                title: "Pricing",
                icon: "/icon/arrow-down.svg",
                link: ""

            },
            {
                title: "Industries",
                icon: "/icon/arrow-down.svg",
                link: "",

            },
            {
                title: "Resources",
                icon: "/icon/arrow-down.svg"
            },
            {
                title: "Support",
                icon: ""
            },


        ],

        downloadButton: {
            text: "Download Teams",
            link: "https://www.microsoft.com/en-gb/microsoft-teams/download-app"
        },


        signinButton: {
            text: "Sign in",
            link: "https://teams.microsoft.com/v2/"
        }


    },
    smallscreenText: {
        text: "Teams",
        icon: "/icon/down-arrow.png"
    },

    banner: {
        backgroundimage: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_Background_1600x700?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2500&hei=780&qlt=100&fmt=png-alpha&fit=constrain",
        title: "Get ready for the future of work with Microsoft Teams",
        subtitle: "Transform the way you work with next-generation AI capabilities and bring together your physical and digital worlds. ",
        actionButton: {
            text: "Download now",
            // link: "https://www.microsoft.com/en-gb/microsoft-teams/download-app#download-for-desktop1"
        }
    },
    stickyNav: {
        stickynavul: [{

            txt: "Featured news",
            link: ""
        },
        {
            txt: "Solutions",
            link: ""

        },
        {
            txt: "Product and Services",
            link: ""

        },
        {
            txt: "Customer stories",
            link: ""

        },
        {
            txt: "Get started",
            link: ""
        }
    ],

        stickynavbtn: "See plans and pricing",


        mobileFeature: "Featured News"

    },
    main:{
      section1:{
        // bgImage:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Featured-Card-Background-1-1600x742?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=4000&hei=1855&qlt=100&fit=constrain",
        topHead:"FEATURED NEWS",
        head:"Discover what’s happening with Teams",
        itemone:{
            card1img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Featured_Card_Get-ready-for-the-future-of-work_416x178?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=429&qlt=100&fmt=png-alpha&fit=constrain",
            card1head:"Prompt like a pro with Microsoft Copilot in Teams",
            card1discript:"Unlock the full potential of your team's decision-making with prompts for Copilot in Teams. Streamline and transform your meetings - so that every idea is visualized, evaluated, and brought to life.",
            cardbtnImg:"/icon/arrow_right.png",
            cardbtnDisc:"Learn more"
        },
        itemtwo:{
            card2img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Featured_Card_Microsoft_Mesh_is_now_available_416x1781?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=429&qlt=100&fmt=png-alpha&fit=constrain",
            card2head:"Try Microsoft Mesh in Teams",
            card2discript:"Connect your workforce in new ways with Mesh—avatars and immersive 3D experiences that feel natural, boost engagement, and empower teams. "
        },
        itemthree:{
            card3img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Featured_Card_Microsoft_Microsoft_Teams_Phone_bundles%20_416x178?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=420&qlt=100&fmt=png-alpha&fit=constrain",
            card3head:"Microsoft Teams Phone",
            card3discript:"Experience smart communication and seamless collaboration with the only calling solution native to Teams. "
        }
        
      },
      section2:{
        topHead:"SOLUTIONS ",
        head:"Streamline communications—all in one place",
        secContent:{
              meet:{
                meethead:"Meet",
                meetImg:"/icon/down-arrow.png",
                meetDisc:"Make meetings more impactful with features like PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.2",
                meebtn:"Learn more"

              }

        }

      }
    }
}
document.addEventListener('DOMContentLoaded', function () {

    function buildTeamsPage() {
        document.title = microsoft.pageTitle
        const headerleft = document.getElementById("header-left")

        const menuImg = document.getElementById("menu-img")
        menuImg.src = microsoft.header.menu

        const header_logo = document.getElementById("header-logo")
        const imgElement = document.getElementById("logo-img");
        // console.log(microsoft.header.logo)
        imgElement.src = microsoft.header.logo
        const teams = document.getElementById("teams")
        teams.innerHTML = microsoft.header.teamtext

        const menuList = document.getElementById("menu-list")
        // headerleft.appendChild(menuList)
        microsoft.header.features.forEach(item => {
            const menuItem = document.createElement('li')
            menuItem.innerHTML =
                `<a href="${item.link}">
             ${item.title} 
             <img src="${item.icon}"></a>`

            menuList.appendChild(menuItem)
        });

        const downloadbtn = document.getElementById('download-btn')
        downloadbtn.innerHTML = microsoft.header.downloadButton.text
        const signinbtn = document.getElementById('signin-btn')
        signinbtn.innerHTML = microsoft.header.signinButton.text

        // smallscree
        const teamtxt = document.getElementById("txt")
        teamtxt.innerHTML = microsoft.smallscreenText.text
        const txtImg = document.getElementById("txt-img")
        txtImg.src = microsoft.smallscreenText.icon
        // banner starts 
        const backgroundImage = document.getElementById("backgroundImage")
        backgroundImage.src = microsoft.banner.backgroundimage

        const head = document.getElementById("head")
        head.innerHTML = microsoft.banner.title

        const paragraph = document.getElementById("paragraph")
        paragraph.innerHTML = microsoft.banner.subtitle
        const headBtn = document.getElementById("head-btn")
        headBtn.innerHTML = microsoft.banner.actionButton.text
        headBtn.addEventListener('click', function () {
            const url = 'https://www.microsoft.com/en-gb/microsoft-teams/download-app#download-for-desktop1'
            window.location.href = url
        })

        const mobileHide = document.getElementById("mobile-hide")
        microsoft.stickyNav.stickynavul.forEach(item => {
            const stickyItem = document.createElement("li")
            stickyItem.innerHTML =
                `<a href"${item.link}">
            ${item.txt}</a>`
            mobileHide.appendChild(stickyItem)
        })
        const stickynavBtn = document.getElementById("sticky-btn")
        stickynavBtn.innerHTML = microsoft.stickyNav.stickynavbtn

        stickynavBtn.addEventListener('click',function(){
            const url='https://www.microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-business-options'
            window.location.href = url

        })
        const mobileSpan = document.getElementById("hide-span")
        mobileSpan.innerHTML = microsoft.stickyNav.mobileFeature

        // section1
        const tophead=document.getElementById("top-head")
        tophead.innerHTML=microsoft.main.section1.topHead
        const head1=document.getElementById("h2")
        head1.innerHTML=microsoft.main.section1.head

        // card one
        const item1img=document.getElementById("card-img1")
        item1img.src=microsoft.main.section1.itemone.card1img
        const item1head=document.getElementById("head1")
        item1head.innerHTML=microsoft.main.section1.itemone.card1head
        const item1Disc=document.getElementById("cardDisc1")
        item1Disc.innerHTML=microsoft.main.section1.itemone.card1discript
        const item1btn=document.getElementById("cardbtn")
        item1btn.src=microsoft.main.section1.itemone.cardbtnImg
        const itemBtnDisc=document.getElementById("btnDisc")
        itemBtnDisc.innerHTML=microsoft.main.section1.itemone.cardbtnDisc
        item1btn.addEventListener('click',function(){
            const url='https://techcommunity.microsoft.com/t5/copilot-for-microsoft-365/prompt-like-a-pro-with-microsoft-copilot-in-teams/ba-p/4141986'
            window.location.href = url

        })
      
        // card2
        const item2img=document.getElementById("card-img2")
        item2img.src=microsoft.main.section1.itemtwo.card2img
        const item2head=document.getElementById("head2")
        item2head.innerHTML=microsoft.main.section1.itemtwo.card2head
        const item2Disc=document.getElementById("cardDisc2")
        item2Disc.innerHTML=microsoft.main.section1.itemtwo.card2discript
        const item2btn=document.getElementById("cardbtn2")
        item2btn.src=microsoft.main.section1.itemone.cardbtnImg
        const item2BtnDisc=document.getElementById("btnDisc2")
        item2BtnDisc.innerHTML=microsoft.main.section1.itemone.cardbtnDisc
        item2btn.addEventListener('click',function(){
            const url='https://www.microsoft.com/en-us/microsoft-teams/microsoft-mesh'
            window.location.href = url

        })
        // card3
        const item3img=document.getElementById("card-img3")
        item3img.src=microsoft.main.section1.itemthree.card3img
        const item3head=document.getElementById("head3")
        item3head.innerHTML=microsoft.main.section1.itemthree.card3head
        const item3Disc=document.getElementById("cardDisc3")
        item3Disc.innerHTML=microsoft.main.section1.itemthree.card3discript
        const item3btn=document.getElementById("cardbtn3")
        item3btn.src=microsoft.main.section1.itemone.cardbtnImg
        const item3BtnDisc=document.getElementById("btnDisc3")
        item3BtnDisc.innerHTML=microsoft.main.section1.itemone.cardbtnDisc
        item3btn.addEventListener('click',function(){
            const url='https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone'
            window.location.href = url

        })

    //   section2
    const Tophead=document.getElementById("top-head2")
    Tophead.innerHTML=microsoft.main.section2.topHead
    const head2=document.getElementById("s2h2")
    head2.innerHTML=microsoft.main.section2.head
    
    const meethead=document.getElementById("meetH3")
    meethead.innerHTML=microsoft.main.section2.secContent.meet.meethead
    const meetImg=document.getElementById("meet-img")
    meetImg.src=microsoft.main.section2.secContent.meet.meetImg
    const meetdisc=document.getElementById("meet-disc")
    meetdisc.innerHTML=microsoft.main.section2.secContent.meet.meetDisc
    const meetbtn=document.getElementById("meet-btn")
    meetbtn.innerHTML=microsoft.main.section2.secContent.meet.meebtn
    }

    buildTeamsPage()
})

