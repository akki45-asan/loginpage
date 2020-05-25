package com.asan.qmsapp.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/inboxcontroller")
public class InboxController {

	@GetMapping("/inbox")
	public String inbox(HttpSession s) {
		//s.invalidate();
		return "user/inbox";
	}
}
