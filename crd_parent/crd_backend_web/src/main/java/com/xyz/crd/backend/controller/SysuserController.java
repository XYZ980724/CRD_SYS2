package com.xyz.crd.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/backend/sysuser")
public class SysuserController {

    @RequestMapping("/中央随机分配系统")
    public String login(){
        //实现登录

        return "ad首页";
    }
}
