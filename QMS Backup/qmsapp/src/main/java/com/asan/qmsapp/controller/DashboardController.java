package com.asan.qmsapp.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/dashboardcontroller")
public class DashboardController {

	
	@GetMapping("/index")
	public String login(HttpSession s) {
		//s.invalidate();
		return "user/index";
	}
}
