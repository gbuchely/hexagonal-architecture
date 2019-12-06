package com.swacorp.crew.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class KeycloakRealmRoleConverter implements Converter<Jwt, Collection<GrantedAuthority>> {
    /*
    public Collection<GrantedAuthority> convert(final Jwt jwt) {
        final Map<String, Object> realmAccess = (Map<String, Object>) jwt.getClaims().get("realm_access");
        return ((List<String>)realmAccess.get("roles")).stream()
                .map(roleName -> "ROLE_" + roleName) // prefix to map to a Spring Security "role"
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }
    */

    public Collection<GrantedAuthority> convert(final Jwt jwt) {
        Collection<GrantedAuthority> roleGrant = new ArrayList<>();
        SimpleGrantedAuthority sga = new SimpleGrantedAuthority("ROLE_" + jwt.getClaims().get("roles"));
        System.out.print("ROLES gbuchely :: " + sga.getAuthority());
        roleGrant.add(sga);
        return roleGrant;
    }
}