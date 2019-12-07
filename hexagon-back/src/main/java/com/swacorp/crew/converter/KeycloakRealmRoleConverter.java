package com.swacorp.crew.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.ArrayList;
import java.util.Collection;

public class KeycloakRealmRoleConverter implements Converter<Jwt, Collection<GrantedAuthority>> {

    public Collection<GrantedAuthority> convert(final Jwt jwt) {
        Collection<GrantedAuthority> roleGrant = new ArrayList<>();
        SimpleGrantedAuthority sga = new SimpleGrantedAuthority("ROLE_" + jwt.getClaims().get("roles"));
        System.out.print("ROLES :: " + sga.getAuthority());
        roleGrant.add(sga);
        return roleGrant;
    }
}