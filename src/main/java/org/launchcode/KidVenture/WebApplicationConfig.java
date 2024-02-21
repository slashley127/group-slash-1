//package org.launchcode.KidVenture;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.HandlerInterceptor;
//import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class WebApplicationConfig implements WebMvcConfigurer {
//    @Bean
//    public HandlerInterceptor authenticationFiler(){
//        return new AuthenticationFilter();
//    }
//
//    @Override
//    public void addInterceptors(InterceptorRegistry registry){
//        registry.addInterceptor(authenticationFiler());
//    }
//}
