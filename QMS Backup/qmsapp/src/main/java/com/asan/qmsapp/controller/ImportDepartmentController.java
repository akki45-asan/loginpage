package com.asan.qmsapp.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/importdepartmentcontroller")
public class ImportDepartmentController {
	
	@GetMapping("/importdepartment")
	public String addrequirement(HttpSession s) {
		//s.invalidate();
		return "user/import_department";
	}
}
