#ifndef VB_CLASS_H
#define VB_CLASS_H

#include <GL/glew.h>
#include <GLFW/glfw3.h>

class VertexBuffer 
{
	public: 
		unsigned int ID;
		VertexBuffer(float* vertices, GLsizeiptr size);

		void Bind();
		void Unbind();
		void Delete();
};

#endif