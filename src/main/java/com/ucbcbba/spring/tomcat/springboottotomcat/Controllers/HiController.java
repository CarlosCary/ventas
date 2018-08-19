package com.ucbcbba.spring.tomcat.springboottotomcat.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller

public class HiController {

    @RequestMapping("/hi")
    @ResponseBody
    public String hello(){
        return "Hi from Turreta.com";
    }
}