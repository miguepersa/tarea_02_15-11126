#ifndef VA_CLASS_H
#define VA_CLASS_H

#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include "VertexBuffer.h"

class VertexArray
{
public:
	unsigned int ID;
	VertexArray();

	void LinkAttrib(VertexBuffer vertexBuffer, GLuint layout, GLuint numComponents, GLuint type, GLsizeiptr stride, void* offset);
	void Bind();
	void Unbind();
	void Delete();
};

#endif