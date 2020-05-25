package com.asan.qmsapp.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/addrequirementcontroller")
public class AddRequirementController {

	
	@GetMapping("/addrequirement")
	public String addrequirement(HttpSession s) {
		//s.invalidate();
		return "user/add_requirement";
	}
}
