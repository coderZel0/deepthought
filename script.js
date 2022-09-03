const taskContainer = document.querySelector(".tasks");
const sidePanelUl = document.querySelector("#list_container_ul");

const tasks = [{
    "task_id": 6233,
    "task_title": "demo task",
    "task_description": "desc desc",
    "tools": [],
    "assets": [{
        "asset_id": 6234,
        "asset_title": "task heading 1",
        "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
        "asset_type": "display_asset",
        "asset_content": "reflection",
        "display_asset_url": "",
        "display_asset_image": "",
        "display_asset_video": "",
        "display_asset_docs": "",
        "display_tb_tid": null,
        "display_tb_pid": null,
        "display_eb_tid": null,
        "display_eb_pid": null,
        "display_asset_reflection": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop "
    }, {
        "asset_id": 6235,
        "asset_title": "task heading 2",
        "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "asset_type": "input_asset",
        "asset_content": "tb",
        "display_asset_url": null,
        "display_asset_image": null,
        "display_asset_video": null,
        "display_asset_docs": null,
        "display_tb_tid": null,
        "display_tb_pid": null,
        "display_eb_tid": null,
        "display_eb_pid": null,
        "display_asset_reflection": null
    }, {
        "asset_id": 6236,
        "asset_title": "task heading 3",
        "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "asset_type": "input_asset",
        "asset_content": "reflection",
        "display_asset_url": null,
        "display_asset_image": null,
        "display_asset_video": null,
        "display_asset_docs": null,
        "display_tb_tid": null,
        "display_tb_pid": null,
        "display_eb_tid": null,
        "display_eb_pid": null,
        "display_asset_reflection": null
    }, {
        "asset_id": 6237,
        "asset_title": "task heading 4",
        "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "asset_type": "display_asset",
        "asset_content": "other",
        "display_asset_url": "",
        "display_asset_image": "",
        "display_asset_video": "",
        "display_asset_docs": "https://drive.google.com/file/d/1Pxw83bTKE3KkOyYnwm1u6DSVjntSrNTp/preview?usp=sharing",
        "display_tb_tid": null,
        "display_tb_pid": null,
        "display_eb_tid": null,
        "display_eb_pid": null,
        "display_asset_reflection": null
    }, {
        "asset_id": 6238,
        "asset_title": "task heading 5",
        "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "asset_type": "display_asset",
        "asset_content": "other",
        "display_asset_url": "",
        "display_asset_image": "https://media.giphy.com/media/IzjhI7ggjDlEnMxZMu/giphy.gif",
        "display_asset_video": "",
        "display_asset_docs": "",
        "display_tb_tid": null,
        "display_tb_pid": null,
        "display_eb_tid": null,
        "display_eb_pid": null,
        "display_asset_reflection": null
    }, {
        "asset_id": 6239,
        "asset_title": "task heading 6",
        "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "asset_type": "input_asset",
        "asset_content": "article",
        "display_asset_url": null,
        "display_asset_image": null,
        "display_asset_video": null,
        "display_asset_docs": null,
        "display_tb_tid": null,
        "display_tb_pid": null,
        "display_eb_tid": null,
        "display_eb_pid": null,
        "display_asset_reflection": null
    }, {
        "asset_id": 6240,
        "asset_title": "task heading 7",
        "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "asset_type": "input_asset",
        "asset_content": "eb",
        "display_asset_url": null,
        "display_asset_image": null,
        "display_asset_video": null,
        "display_asset_docs": null,
        "display_tb_tid": null,
        "display_tb_pid": null,
        "display_eb_tid": null,
        "display_eb_pid": null,
        "display_asset_reflection": null
    }, {
        "asset_id": 6241,
        "asset_title": "task heading 8",
        "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "asset_type": "display_asset",
        "asset_content": "other",
        "display_asset_url": "https://drive.google.com/file/d/1dBBYQsz2yt3vc4YMkRmVC3nuTBbq2GON/preview?usp=sharing",
        "display_asset_image": "",
        "display_asset_video": "",
        "display_asset_docs": "",
        "display_tb_tid": null,
        "display_tb_pid": null,
        "display_eb_tid": null,
        "display_eb_pid": null,
        "display_asset_reflection": null
    }, {
        "asset_id": 6242,
        "asset_title": "task heading 9",
        "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "asset_type": "display_asset",
        "asset_content": "other",
        "display_asset_url": "",
        "display_asset_image": "",
        "display_asset_video": "https://www.youtube.com/embed/s8H0Sx7jy7c",
        "display_asset_docs": "",
        "display_tb_tid": null,
        "display_tb_pid": null,
        "display_eb_tid": null,
        "display_eb_pid": null,
        "display_asset_reflection": null
    }]
}]


const assets=tasks[0].assets;
let headings = []

const handleClick =(id)=>{
    console.log("cllicked")
    const el = document.getElementById(id);
    const d = el.querySelector('.asset_description');
    console.log(d);
    d.classList.toggle('show');
    
}

const getContent = (asset)=>{
    if(asset.display_asset_image){
        return `<img src="${asset.display_asset_image}" />`
    }
    else if(asset.display_asset_docs){
        return `<iframe src="${asset.display_asset_docs}"></iframe>`
    }
    else if(asset.display_asset_video){
        return `<iframe src="${asset.display_asset_video}"></iframe>`
    }
    else if(asset.display_asset_url){
        return `<iframe src="${asset.display_asset_url}"></iframe>`
    }
    else if(asset.display_asset_reflection){
        return `<p style="padding:2px 8px;letter-spacing:1px">${asset.display_asset_reflection}</p>`
    }
    else if(asset.asset_content==="reflection"){
            return `<div class="reflection">
                    <span style="padding:6px;margin:3px">reflect as per given guidelines</span> 
                    </div>`
        
    }
    else if(asset.asset_content==='tb'){
        return `<div class="thread_container">
        <div style="margin: 14px 0px;width: 100%;border-top:1px solid rgb(182, 178, 178);border-bottom: 1px solid rgb(182, 178, 178);" class="flex_center justify-start heading">
            <div style="width: 30%;" class="flex_center space_between">
                <i class="fas fa-chevron-up"></i>
                <h3 style="margin:8px 15px;margin: 0px 5px;padding:5px">Thread A</h3>
            </div>
            
        </div>
        <div class="flex flex-col thread_content">
            <div class="flex">
                <div class="flex_center flex-col text_box">
                    <div class="text_box__heading">sub thread 1</div>
                    <div class="text_box__textarea">
                        <input placeholder="enter text here" type="text">
                    </div>
                </div>
                <div class="flex_center flex-col text_box">
                    <div class="text_box__heading">sun interpretation 1</div>
                    <div class="text_box__textarea">
                        <input placeholder="enter text here" type="text">
                    </div>
                </div>
            </div>

            <div class="content flex items-center justify-end">
                <div class="flex space_between icon_container">
                    <i class="fas fa-lightbulb"></i>
                    <i class="fas fa-comment-alt"></i>
                </div>
                <div class="flex space_between">
                    <div class="flex_center space_between menu_container">
                        <span style="margin:6px;padding: 5px;">Select category</span>
                        <i style="margin: 5px;padding: 5px;" class="fas fa-chevron-down"></i>
                    </div>
                    <div class="flex_center space_between menu_container">
                        <span style="margin:4px;padding: 2px;">Select category</span>
                        <i style="margin: 4px;padding: 2px;" class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div style="margin-left: 10px; margin: 6px;padding: 7px;" class="content flex flex-col">
                <div class="btn-container flex justify-start">
                    <div style="width: fit-content;height: 36px;background-color: #0029FF;border-radius: 8px;" class="btn flex_center space_between">
                        <i style="padding: 1px;margin: 2px;color: white;font-size: 12px;" class="fas fa-plus"></i>
                        <span style="color: white;padding: 1px 4px;margin: 2px; font-size: 12px;">sub thread</span>
                    </div>
                </div>
                <div style="margin-top:18px;padding:2px;background-color: rgb(202, 200, 196);border-radius: 10px;" class="text_box_large flex flex-col items-center">
                    <div style="padding: 6px 0px;" class="text_box__heading">
                        Summary for thread A
                    </div>
                    <div style="background-color: rgb(236, 238, 238);width: 100%;height:70px;border-radius: 15px 15px 10px 10px;" class="text_box_large__textarea">
                        <span style="padding: 4px;margin: 5px;margin-top: 4px;">enter text here</span>
                    </div>
                </div>
            </div>

            <div style="padding: 10px;" class="content flex flex-col items-center">
                <div style="width: 100%;" class="flex_center space_between">
                    <div class="flex_center space_between">
                        <i style="font-size: 11px;transform: rotate(45deg);" class="fas fa-link"></i>
                        <span style="margin:4px;padding:2px">Thread Credit</span>
                        <i style="color:#0029FF ;font-size: 11px;" class="fas fa-pen"></i>
                    </div>
                    <div class="flex_center space_between menu_container">
                        <span style="margin:4px;padding: 2px;">Select Emotion</span>
                        <i style="margin: 4px;padding: 2px;" class="fas fa-chevron-down"></i>
                    </div>
                </div>

                <div style="width: 100%; margin-top: 10px;" class="flex_center justify-end">
                    <div style="width: fit-content;height: 36px;background-color: #0029FF;border-radius: 8px;" class="btn flex_center space_between">
                        <i style="padding: 3px;margin: 4px;color: white;" class="fas fa-plus"></i>
                        <span style="color: white;padding: 3px;margin: 4px;">New Thread</span>
                    </div>
                </div>
                <div style="width: 100%; margin: 12px;" class="flex_center justify-end">
                    <i style="font-size: 29px; margin-right: 12px;" class="fas fa-save"></i>
                </div>
            </div>
        </div>
        
    </div>`
    }
    else if(asset.asset_content==='eb'){
        return `<div style="width: 100%;" class="thread_main__container">
        <!--1 container-->
        <div class="thread_container">
            <div style="background-color: rgb(221, 220, 218);margin: 14px 0px;width: 100%;border-top:1px solid rgb(182, 178, 178);border-bottom: 1px solid rgb(182, 178, 178);" class="flex_center justify-start heading">
                <div style="width: 30%;" class="flex_center space_between">
                    <i class="fas fa-chevron-up"></i>
                    <h3 style="margin:8px 15px;margin: 0px 5px;padding:5px">Introduction</h3>
                </div>
                
            </div>
            <div class="flex_center flex-col thread_content">
                <div style="background-color: rgb(236, 238, 238);width: 80%;height:70px;border-radius: 15px 15px 10px 10px;" class="text_box_large__textarea">
                    <span style="padding: 4px;margin: 5px;margin-top: 4px;">enter introduction</span>
                </div>
            </div>
            <!--2nd-->
            <div class="thread_container">
                <div style="background-color: rgb(221, 220, 218);margin: 14px 0px;width: 100%;border-top:1px solid rgb(182, 178, 178);border-bottom: 1px solid rgb(182, 178, 178);" class="flex_center justify-start heading">
                    <div style="width: 30%;" class="flex_center space_between">
                        <i class="fas fa-chevron-up"></i>
                        <h3 style="margin:8px 15px;margin: 0px 5px;padding:5px">Thread A</h3>
                    </div>
                    
                </div>
                <div style="margin:10px 0px" class="flex_center flex-col thread_content">
                    <div style="width: 80%;margin-top:18px;padding:2px;background-color: rgb(202, 200, 196);border-radius: 10px;" class="text_box_large flex flex-col items-center">
                        <div style="padding: 6px 0px;" class="text_box__heading">
                            Example 1
                        </div>
                        <div style="background-color: rgb(236, 238, 238);width: 100%;height:70px;border-radius: 15px 15px 10px 10px;" class="text_box_large__textarea">
                            <span style="padding: 4px;margin: 5px;margin-top: 4px;">enter text here</span>
                        </div>
                    </div>
                    <div style="width: 80%;margin: 14px 0px;" class="flex justify-start">
                        <div style="width: fit-content;height: 36px;background-color: #0029FF;border-radius: 8px;" class="btn flex_center space_between">
                            <i style="padding: 1px;margin: 2px;color: white;font-size: 12px;" class="fas fa-plus"></i>
                            <span style="color: white;padding: 1px 4px;margin: 2px; font-size: 12px;">example</span>
                        </div>
                    </div>

                    <div style="width: 80%;margin-top:18px;padding:2px;background-color: rgb(202, 200, 196);border-radius: 10px;" class="text_box_large flex flex-col items-center">
                        <div style="padding: 6px 0px;" class="text_box__heading">
                            Argument for thread A
                        </div>
                        <div style="background-color: rgb(236, 238, 238);width: 100%;height:70px;border-radius: 15px 15px 10px 10px;" class="text_box_large__textarea">
                            <span style="padding: 4px;margin: 5px;margin-top: 4px;">enter text here</span>
                        </div>
                    </div>
                    <div style="width:80%;margin:10px 0px;padding:4px 0px" class="flex justify-end">
                        <div style="width: fit-content;height: 36px;background-color: #0029FF;border-radius: 8px;" class="btn flex_center space_between">
                            <i style="padding: 3px;margin: 4px;color: white;" class="fas fa-plus"></i>
                            <span style="color: white;padding: 3px;margin: 4px;">New Thread</span>
                        </div>
                    </div>
                </div>
            <!--3rd-->
            <div class="thread_container">
                <div style="background-color: rgb(221, 220, 218);margin: 14px 0px;width: 100%;border-top:1px solid rgb(182, 178, 178);border-bottom: 1px solid rgb(182, 178, 178);" class="flex_center justify-start heading">
                    <div style="width: 30%;" class="flex_center space_between">
                        <i class="fas fa-chevron-up"></i>
                        <h3 style="margin:8px 15px;margin: 0px 5px;padding:5px">Conclusion</h3>
                    </div>
                    
                </div>
                <div class="flex_center flex-col thread_content">
                    <div style="background-color: rgb(236, 238, 238);width: 80%;height:70px;border-radius: 15px 15px 10px 10px;" class="text_box_large__textarea">
                        <span style="padding: 4px;margin: 5px;margin-top: 4px;">enter conclusion</span>
                    </div>
                </div>
                <div style="width:100%;margin:15px 0px;padding: 6px 0px;" class="flex justify-end">
                    <i style="font-size: 29px; margin-right: 45px;" class="fas fa-save"></i>
                </div>
            </div>`
    }
    else{
        return "no content"
    }
    
    /*if(asset.asset_type==="input_asset"){
        if(asset.asset_content==="reflection"){
            return `<div class="reflection">
                    <span style="padding:6px;margin:3px">reflect as per given guidelines</span> 
                    </div>`
        }
    }*/
}

assets.forEach((asset)=>{
    /*journey board */
    const li = document.createElement('li');
    li.classList.add('list_item');
    li.innerHTML = asset.asset_title;
    sidePanelUl.appendChild(li);
    /*journey board end */
    const el = document.createElement('div');
    el.classList.add('asset_container');
    el.id = asset.asset_id;
    el.innerHTML = `<div class="asset_heading flex_center">${asset.asset_title}</div>
    <div class="main_content flex_center">
        ${getContent(asset)}
    </div>
    <div class="asset_description ">${asset.asset_description}</div>
    <div class="arrow">
        <div onclick="handleClick(${asset.asset_id})" style="height:15px;width:15px;border-radius: 50%;">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>`;

    taskContainer.appendChild(el);
})


const showSidePanel = ()=>{
    const panel = document.querySelector(".journey_board");
    const blue_box = document.querySelector("#blue_box");
    panel.classList.toggle("show_sidepanel");
    blue_box.classList.toggle("visible");
}
//console.log(tasks);