using System;

namespace api.Dtos;

public class NewUserDto
{
    public string Token { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
}
