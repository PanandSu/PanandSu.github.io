---
layout:       post
title:        "Git 流程"
author:       "PanJinhao"
header-style: text
catalog:      true
tags:
    - Git
    - JavaScript
---

### 5个简单的步骤
1. `git init`,初始化git文件夹
2. `git add .`,将当前目录下所有文件添加至暂存区
3. `git commit -m "first-commit",添加commit信息
4. `git remote add origin xxx",xxx来自新建的repository
5. `git push -u origin master`,将暂存区代码推送至github服务器,这样刷新GitHub就可以看到新的代码了

### 之后在IDE中
写完代码就提交,添加commit,提交完了再git/推送,然后刷新github上对应的repository,就可以看到更新了
若是要将repository中的代码拉至本地,点击git/拉取,就拉取了GitHub上的代码至本地.
