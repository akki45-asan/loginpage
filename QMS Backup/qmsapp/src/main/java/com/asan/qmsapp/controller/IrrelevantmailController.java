package com.asan.qmsapp.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/irrelevantmailcontroller")
public class IrrelevantmailController {

	@GetMapping("/irrelevantmail")
	public String inbox(HttpSession s) {
		//s.invalidate();
		return "user/irrelevant_Mail";
	}
}
