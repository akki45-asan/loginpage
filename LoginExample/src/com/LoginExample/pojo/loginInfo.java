package com.LoginExample.pojo;

public class loginInfo 
{
	String username,password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "loginInfo [username=" + username + ", password=" + password + "]";
	}

}
