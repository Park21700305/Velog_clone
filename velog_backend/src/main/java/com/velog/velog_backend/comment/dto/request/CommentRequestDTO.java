package com.velog.velog_backend.comment.dto.request;

import lombok.Getter;

@Getter
public class CommentRequestDTO {
    private Long memberId;
    private String content;
    private Long postId;
    private Long parentId;
}
