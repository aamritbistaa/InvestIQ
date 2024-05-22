using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class UpdateCommentRequestDto
    {
        [Required]
        [MinLength(8, ErrorMessage = "Title must be more than 8 letters")]
        [MaxLength(200, ErrorMessage = "Title must be less than 100 letters")]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MinLength(8, ErrorMessage = "Content must be more than 8 letters")]
        [MaxLength(200, ErrorMessage = "Content must be less than 300 letters")]
        public string Content { get; set; } = string.Empty;
    }
}