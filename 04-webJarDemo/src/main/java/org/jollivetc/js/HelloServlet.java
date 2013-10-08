package org.jollivetc.js;

import javax.servlet.ServletOutputStream;
import java.io.IOException;

/**
 */
public class HelloServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("text/html");

        ServletOutputStream o = response.getOutputStream();
        o.println("<html>");
        o.println("<head><title>Hello World</title></head>");
        o.println("<body>");


        o.println("Hello from Servlet");

        o.println("</body></html>");
    }
}
