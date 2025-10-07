import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div className="hero-content text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary">ReactRouter</span>
            </h1>
            <p className="text-lg sm:text-xl text-base-content/70 mb-8 max-w-3xl mx-auto">
              We're passionate about building exceptional web experiences using
              modern React Router technology. Our team combines creativity with
              technical expertise to deliver solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-base-content/70 mb-6">
                To revolutionize web development by creating fast, scalable, and
                user-friendly applications that push the boundaries of what's
                possible with React Router.
              </p>
              <p className="text-lg text-base-content/70 mb-8">
                We believe in the power of modern web technologies to solve
                real-world problems and create meaningful digital experiences
                that connect people and businesses.
              </p>
              <Link to="/portfolio" className="btn btn-primary btn-lg">
                View Our Work
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-base-content/70">
                    Projects Completed
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    5+
                  </div>
                  <div className="text-sm text-base-content/70">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-base-content/70">
                    Client Satisfaction
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-base-content/70">
                    Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="card-title justify-center mb-2">
                  Quality First
                </h3>
                <p className="text-base-content/70">
                  We never compromise on quality. Every line of code is written
                  with precision and care.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="card-title justify-center mb-2">Innovation</h3>
                <p className="text-base-content/70">
                  We stay ahead of the curve, constantly exploring new
                  technologies and methodologies.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="card-title justify-center mb-2">
                  Collaboration
                </h3>
                <p className="text-base-content/70">
                  We believe in the power of teamwork and transparent
                  communication with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full bg-primary/10">
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      👨‍💻
                    </div>
                  </div>
                </div>
                <h3 className="card-title justify-center mb-2">John Smith</h3>
                <p className="text-primary font-semibold mb-2">
                  Lead Developer
                </p>
                <p className="text-base-content/70 text-sm">
                  Full-stack developer with 8+ years of experience in React and
                  modern web technologies.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full bg-secondary/10">
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      👩‍🎨
                    </div>
                  </div>
                </div>
                <h3 className="card-title justify-center mb-2">
                  Sarah Johnson
                </h3>
                <p className="text-secondary font-semibold mb-2">
                  UI/UX Designer
                </p>
                <p className="text-base-content/70 text-sm">
                  Creative designer passionate about creating beautiful and
                  intuitive user experiences.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full bg-accent/10">
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      👨‍💼
                    </div>
                  </div>
                </div>
                <h3 className="card-title justify-center mb-2">Mike Chen</h3>
                <p className="text-accent font-semibold mb-2">
                  Project Manager
                </p>
                <p className="text-base-content/70 text-sm">
                  Experienced project manager ensuring smooth delivery and
                  client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Get In Touch
            </Link>
            <Link
              to="/portfolio"
              className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
