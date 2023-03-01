/* A method for taking an exception's print stack trace into a usable String. */

public static String exceptionTraceToString(Exception ex) {
		ByteArrayOutputStream byteArrayStream = new ByteArrayOutputStream();
		PrintStream printStream = new PrintStream(byteArrayStream);

		ex.printStackTrace(printStream);
		printStream.close();

		return byteArrayStream.toString();
	}
