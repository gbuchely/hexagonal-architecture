package com.swacorp.crew.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;

@EnableWebSecurity
public class OAuth2ResourceServerSecurityConfiguration extends WebSecurityConfigurerAdapter {

    private String jwkSetUri = System.getenv("jwkSetUri");

    @Value("${sec}")
    private String sec;

    private Authorizer authorizer = new Authorizer();

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        System.out.println("sec : " + sec);
        System.out.println("jwkSetUri : " + jwkSetUri);

        http.cors();
        if (sec.equals("role")) {
            authorizer.authorizeByRole(http);
        } else {
            authorizer.authorizeByAuthority(http);
        }
    }

    @Bean
    JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder.withJwkSetUri(jwkSetUri).build();
    }
}