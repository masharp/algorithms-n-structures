/* A method for taking that generates a random string of defined length based on a string of parameters
    - by Michael Sharp
    - msharp.oh@gmail.com
    - www.softwareontheshore.com */


public String generateRandomString() {
  	final String PARAM = "ABCDEFGHIJKLMNOPQRZ1234567890";
  	Random random = new Random();

  	StringBuilder captcha = new StringBuilder(6);
  	for (int i = 0; i < 6; i++) {
  		captcha.append(PARAM.charAt(random.nextInt(PARAM.length())));
  	}

  	return captcha.toString();
}
