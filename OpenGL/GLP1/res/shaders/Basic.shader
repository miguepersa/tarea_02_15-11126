#shader vertex
#version 330 core

layout(location = 0) in vec3 position;
layout(location = 1) in vec3 aColor;

out vec3 color;

void main()
{
   gl_Position = vec4(position.x, position.y, position.z, 1.0);
   color = aColor;
};


#shader fragment
#version 330 core
out vec4 fragColor;

in vec3 color;

void main()
{
   fragColor = vec4(color, 1.0f);
};
