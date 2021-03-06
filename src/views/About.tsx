import * as React from "react";
import { NavLink } from "react-router-dom";

export const About = () => (
  <div className="about section">
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile is-parent">
          <div className="tile is-child box is-4">
            <p className="title">What</p>
            <p className="subtitle">... is this thing for?</p>
            Bash Plate lets you generate boilerplate for shell scripts that
            takes care of receiving, parsing, validating and documenting script
            arguments.
            <br />
            It is intended to give you a starting point for your scripts that is
            reasonably clean without you having to remember the different
            possibilities and their details for receiving script arguments.
            <br />
            <br />
            It is not intended to be used in a round-trip fashion, although you
            could swap out the generated portion in your file with a newly
            generated one adding more options. But generally, your on your own
            after generation.
            <br />
            It kinda works on a reasonable recent phone in landscape mode, but
            if you want to generate shell scripts on your mobile on the go, you
            should really have you checked out.
            <br />
            <br />
            <NavLink to="/" className="is-primary button">
              Go generate!
            </NavLink>
            <p className="is-pulled-right">
              Written by <a href="https://wolfgang-werner.net">this human</a>.
            </p>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="tile is-child box">
            <p className="title">Why</p>
            <p className="subtitle">... does it even exist?</p>
            Each time I need to write a shell script - which is <em>
              exactly
            </em>{" "}
            long enough to forget all the details after writing the last one - ,
            I go through a process of thought like the following:
            <ul>
              <li>
                🧐 &quot;I want this to be reusable, so I&apos;ll use proper
                options & help messages&quot;
              </li>
              <li>
                🤔 &quot;Hmmm, was it getopt or getopts? Which was the GNU and
                which the POSIX one? Shouldn&apos;t I use argbash?&quot;
              </li>
              <li>
                😤 &quot;So how does the option spec need to look like? Why is
                that colon at the start again? Does the following option take an
                argument?&quot;
              </li>
              <li>
                😩 &quot;How to I test if an argument was set? Reliably and and
                in a portable manner?&quot;
              </li>
            </ul>
            <br />
            Now, I either:
            <ul>
              <li>
                Copy an old script and fiddle around in it - bad, since there is
                stuff to remove, I could break things and I still need to think
              </li>
              <li>
                Read up on option parsing - bad, as it takes time and I have to
                decide between getopt, getopts and argbash
              </li>
              <li>
                Just skip parameterizing the script and hard code everything -
                bad, exactly what I started out
                <em>not</em> to do
              </li>
            </ul>
            <br />
            So basically, I try to hack myself into writing better scripts.
            <br />
            If you can relate, give it a spin.
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">More</p>
            <p className="subtitle">
              Some useful references, alternatives and background.
            </p>
            <ul>
              <li>
                <a href="http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html">
                  POSIX style options standard
                </a>
              </li>
              <li>
                <a href="https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html">
                  GNU style options standard
                </a>
              </li>
              <li>
                <a href="http://www.catb.org/esr/writings/taoup/html/ch10s05.html">
                  Common option names and semantics by ESR. Read this to pick
                  more intuitive option names.
                </a>
              </li>
              <li>
                <a href="https://codeburst.io/13-tips-tricks-for-writing-shell-scripts-with-awesome-ux-19a525ae05ae">
                  Some tips for writing shell scripts.
                </a>
              </li>
              <li>
                <a href="https://kvz.io/blog/2013/11/21/bash-best-practices/">
                  And some more tips.
                </a>
              </li>
              <li>
                <a href="http://wiki.bash-hackers.org/howto/getopts_tutorial">
                  Getopts Tutorial
                </a>
              </li>
              <li>
                <a href="http://man7.org/linux/man-pages/man1/getopt.1.html">
                  GNU Getopt
                </a>
              </li>
              <li>
                <a href="https://argbash.io/">Argbash</a>
              </li>
              <li>
                <a href="https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46">
                  12 Factor CLI apps
                </a>
              </li>
              <li>
                CLI application framework recommendations:
                <a href="https://github.com/Kotlin/kotlinx.cli">
                  kotlinx.cli for Kotlin
                </a>
                ,
                <a href="https://picocli.info/">
                  picocli for Java (or Kotlin) ♥
                </a>
                ,
                <a href="https://github.com/spf13/cobra/">
                  Cobra (use w/ Viper!) for Golang ♥♥♥
                </a>
                ,<a href="https://oclif.io/">oclif for Javascript / Node</a>,
                <a href="https://github.com/pallets/click/">click for python</a>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
