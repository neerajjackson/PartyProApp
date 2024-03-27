package com.PROPARTY.Party.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PROPARTY.Party.model.User;
import com.PROPARTY.Party.model.enumerate.Role;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String username);

    User findByUid(Long uid);

    void deleteByUid(Long uid);

    List<User> findByRole(Role role);

}
