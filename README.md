以下是详细步骤：

打开 Cloudflare 控制台：访问 dash.cloudflare.com/

创建一个 Worker：

登录后，在左侧面板中选择 "Workers"，然后点击 "创建"， 创建一个新的 Worker 服务。
![image](https://github.com/user-attachments/assets/56f8991a-9171-4800-a524-c7d1d630a332)

为你的 Worker 起个名称，然后点击 保存。
![image](https://github.com/user-attachments/assets/a72616b2-0d70-42c6-a44e-4a65ce1fa6f4)
保存后，继续右下角点击完成
![image](https://github.com/user-attachments/assets/a39947f6-fa52-4157-b8c9-871931a3ec8c)

编辑代码：
完成上述步骤后，右上方点击 "编辑代码" 进入代码编辑页。删除默认代码，并用以下代码替换，然后点击右上角的 “部署”按钮进行部署。
![image](https://github.com/user-attachments/assets/4bd89259-5d6d-46ac-a887-591b117e5ebe)


获取路由 URL 地址：

部署成功后，点击左侧返回，然后依次点击“设置”--“触发器”  
![image](https://github.com/user-attachments/assets/f0791fef-7e29-4108-95df-9d08627451b6)

你也可以点击上方的 "添加自定义域" 绑定自己的域名。强烈建议这样做，因为 workers.dev 域名在国内已被墙，无法直接使用。通过绑定自定义域名，便可以免去使用科学上网工具。
