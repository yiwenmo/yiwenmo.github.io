---
layout: post
title: "有在使用深度學習模型時，常常需要加入 GPU 加快模型訓練，所以勢必要碰到安裝 CUDA, cuDNN 以及適用版本的 torch / torchvision。"
date: 2025-06-25
---

有在使用深度學習模型時，常常需要加入 GPU 加快模型訓練，所以勢必要碰到安裝 CUDA, cuDNN 以及適用版本的 torch / torchvision。

:::success
* 有關詳細說明 GPU 與 CPU 在計算上的差異，或是 CUDA / cuDNN 在深度學習中所扮演的角色，強力推薦這篇文章[GPU，CUDA，cuDNN的理解](https://blog.csdn.net/u014380165/article/details/77340765)，寫的超級詳細又好懂！另外，還有各種模型的算法解釋能去 [AI之路](https://blog.csdn.net/u014380165?type=blog) 挖寶看看
* 想要看軟體安裝或是寫 code 遇到的一些問題，可以去 [水w](https://blog.csdn.net/qq_45956730?type=blog) 部落格看，每篇文章也是步驟很明確又很詳細，能夠學到很多。
:::

# Windows 安裝 Pytorch
之前在碩班唸書，寫功課初次碰到安裝的情況，找了很多資料但是每個人的安裝方法都不一，回想起來覺得每一步知道自己在做什麼很重要，剛好最近又重灌自己的電腦，所以來寫一篇心得。這篇主要會是紀錄怎麼根據電腦的 CUDA 版本，安裝對應的 torch / torchvision ，並且檢查程式到底有沒有使用到 GPU。

## 1. 下載並安裝 CUDA
- 在 cmd 打上`nvidia-smi`，可查看電腦能安装的最高 CUDA 版本。
    ![螢幕擷取畫面 2024-03-19 165510](https://hackmd.io/_uploads/ByuOfmP0T.png)
依照上面的結果，可以安裝 CUDA version 12.2 及 Driver version 536.99。
- 去 [CUDA 官網](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html)查詢能夠安裝的 CUDA 版本

    ![Screenshot 2024-03-19 at 10.41.23 PM](https://hackmd.io/_uploads/r1wPNXv0a.png)
    
    看完相對應的版本後，就可以去[CUDA Toolkit Archive](https://developer.nvidia.com/cuda-toolkit-archive) 將 CUDA 下載並安裝到本機端
    
    ![Screenshot 2024-03-19 at 10.43.59 PM](https://hackmd.io/_uploads/HkKA47PCp.png)

- 當安裝完成後，可以在 cmd 打上 `nvcc -V` ，若有出現類似下列的訊息，就表示安裝成功。

    ![圖片](https://hackmd.io/_uploads/B1Fx9TDR6.png)


## 2. 根據 CUDA 版本找尋對應的 torch / torchvision

- 要先查看自己電腦的 python 版本。只要打開 VScode 就可以看到是哪一個版本，由於我是建立在 Anaconda 裡面，所以如圖就是3.8.8。
- 
    ![螢幕擷取畫面 2024-03-20 091520](https://hackmd.io/_uploads/SJI_Y3wRa.png)
    
    :::success
    也可以用 cmd 看 python 版本
    ![圖片](https://hackmd.io/_uploads/B1WMc6vAa.png)
    :::

- 根據下面那張圖選擇適合的版本
    ![螢幕擷取畫面 2024-03-20 095148](https://hackmd.io/_uploads/rJUYzaP0a.png)
    我選擇 torch 1.11.0 / torchvision 0.12.0，接著點選[該網址](https://download.pytorch.org/whl/torch_stable.html)，去下載對應的 torch / torchvision。**要注意，裡面檔案有分成 CPU 跟 GPU 以及 linux 跟 windows，之前沒有看清楚就下載成 CPU 版本**

- 下載好兩個 .whl 檔案，並透過 `pip install <檔案名>` 安裝。
    ![圖片](https://hackmd.io/_uploads/HJW6cTvAT.png)
    ![螢幕擷取畫面 2024-03-19 133122](https://hackmd.io/_uploads/Syy1vawA6.png)

- 再透過 cmd 打 `pip list`
    ![螢幕擷取畫面 2024-03-19 165654](https://hackmd.io/_uploads/HJRQKpD0p.png)
    
    接著就在 VScode 打，有出現 GPU 型號就代表安裝成功。
    ```
    import torch
    print(torch.cuda.is_available())
    print(torch.cuda.get_device_name(0))
    ```
    ![圖片](https://hackmd.io/_uploads/ryuLK6PRp.png)