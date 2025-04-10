using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Account;

public class RegisterDto
{
    [Required]
    public string UserName { get; set; }
    [Required]
    [EmailAddress]
    public string EmailAddress { get; set; }
    [Required]
    public string Password { get; set; }
}
