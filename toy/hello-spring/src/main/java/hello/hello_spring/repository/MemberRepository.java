package hello.hello_spring.repository;

import com.fasterxml.jackson.databind.ext.SqlBlobSerializer;
import hello.hello_spring.domain.Member;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
}
