package com.swacorp.crew.config;

import com.swacorp.crew.converter.KeycloakRealmRoleConverter;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;

public class Authorizer {

    JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();

    public static void authorizeByAuthority(HttpSecurity http) throws Exception {
        System.out.println("*** authorizeByAuthority ***");

        http
            .authorizeRequests(authorizeRequests ->
                authorizeRequests
                    .antMatchers(HttpMethod.GET, "/api/**").hasAuthority("SCOPE_poems/admin")
                    .anyRequest().authenticated()
            )
            .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt);
    }

    public void authorizeByRole(HttpSecurity http) throws Exception {
        System.out.println("*** authorizeByRole ***");

        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(new KeycloakRealmRoleConverter());

        http.cors();
        http
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .antMatchers(HttpMethod.GET, "/admin/**").hasRole("ADMIN")
                                .anyRequest().authenticated()
                )
                .oauth2ResourceServer().jwt()
                .jwtAuthenticationConverter(jwtAuthenticationConverter);
    }
}
