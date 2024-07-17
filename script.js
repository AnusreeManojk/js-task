const microsoft = {
    pageTitle: "Microsoft Teams - Group Chat Software",

    header: {
        menu:"icon/menu-horizontal.svg",
       
        logo:  "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",

        teamtext:"Teams",
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
    smallscreenText:{
            text:"Teams",
            icon:"/icon/down-arrow.png"
    },

    banner: {
        backgroundimage: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_Background_1600x700?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2500&hei=780&qlt=100&fmt=png-alpha&fit=constrain",
        title: "Get ready for the future of work with Microsoft Teams",
        subtitle: "Transform the way you work with next-generation AI capabilities and bring together your physical and digital worlds. ",
        actionButton: {
            text: "Download now",
            link: "https://www.microsoft.com/en-gb/microsoft-teams/download-app#download-for-desktop1"
        }
    }

}
document.addEventListener('DOMContentLoaded', function () {

    function buildTeamsPage() {
        document.title = microsoft.pageTitle

        const container=document.getElementById("container")
       
        const headerElement = document.getElementById("header");
        // containers.appendChild(headerElement)
        
        const headerPadding=document.getElementById("header-padding")
        const headerleft=document.createElement("div")
        headerPadding.appendChild(headerleft)
        headerleft.classList.add("header-left")


       const menuBtn=document.createElement("div")
       menuBtn.classList.add("menu-btn")
       const menuImg=document.createElement("img")
       menuImg.src=microsoft.header.menu

       headerleft.appendChild(menuBtn)
       menuBtn.appendChild(menuImg)

        const header_logo=document.createElement("div")
        header_logo.classList.add("header-logo")
        headerleft.appendChild(header_logo)
        const imgElement = document.createElement("img");
        // console.log(microsoft.header.logo)
         imgElement.src=microsoft.header.logo
         console.log(imgElement)
         header_logo.appendChild(imgElement)
        // imgElement.src=
        const teamText=document.createElement("div")
        teamText.classList.add("team-text")

        const teams=document.createElement("span")
        teams.classList.add("teams")
        teams.innerHTML=microsoft.header.teamtext
    
        headerleft.appendChild(teamText)
        teamText.appendChild(teams)

         
        const menuList = document.getElementById("menu-list")
       headerleft.appendChild(menuList)
        microsoft.header.features.forEach(item => {
             const menuItem=document.createElement('li')
             menuItem.innerHTML=
             `<a href="${item.link}">
             ${item.title} 
             <img src="${item.icon}"></a>`
            
            menuList.appendChild(menuItem)
        });

        const rightside=document.createElement("div");
        headerPadding.appendChild(rightside)
        rightside.classList.add("right-side")

        const downloadbtn=document.createElement('button')
        downloadbtn.innerHTML=microsoft.header.downloadButton.text
        rightside.appendChild(downloadbtn)
        const signinbtn=document.createElement('button')
        signinbtn.innerHTML=microsoft.header.signinButton.text
        rightside.appendChild(signinbtn)

// smallscree
     const smallteamtxt=document.createElement("div")
     smallteamtxt.classList.add("small-txt")
     container.appendChild(smallteamtxt)
     const teamtxt=document.createElement("div")
     teamtxt.innerHTML=microsoft.smallscreenText.text
     smallteamtxt.appendChild(teamtxt)

    // banner starts 
        const banner=document.getElementById("banner-content")
        const background=document.createElement("div")
        background.classList.add("bg")

        
        const backgroundImage=document.createElement("img")
        backgroundImage.src=microsoft.banner.backgroundimage
       
        banner.appendChild(background)
        background.appendChild(backgroundImage)

         const bannerElements=document.createElement("div")
         bannerElements.classList.add("element-margin")
         banner.appendChild(bannerElements)

         const bannerPadding=document.createElement("div")
         bannerPadding.classList.add("banner-padding")
         bannerElements.appendChild(bannerPadding)
         
         const bannerMain=document.createElement("div")
         bannerMain.classList.add("banner-main")
         bannerPadding.appendChild(bannerMain)

         const bannerHead=document.createElement("div")
         bannerHead.classList.add("banner-head")
         const head=document.createElement("h1")
        head.innerHTML=microsoft.banner.title
         bannerMain.appendChild(bannerHead)
         bannerHead.appendChild(head)
         
        //  const empty=document.createElement("div")
        //  empty.classList.add("empty")
        //  banner.appendChild(empty)

        const headParagraph=document.createElement("div")
         headParagraph.classList.add("banner-paragraph")
         bannerMain.appendChild(headParagraph)
         const paragraph=document.createElement("p")
         paragraph.innerHTML=microsoft.banner.subtitle
         headParagraph.appendChild(paragraph)

         const buttonPadding=document.createElement("div")
         buttonPadding.classList.add("button-padding")
         const headBtn=document.createElement("button")
         headBtn.innerHTML=microsoft.banner.actionButton.text

         bannerMain.appendChild(buttonPadding)
         buttonPadding.appendChild(headBtn)
    }
    buildTeamsPage()
})
