<div align="center">
  <h1>Lumen Blocks Starter</h1>
  <p><strong>A starter template for building Dioxus applications with Lumen Blocks components</strong></p>
</div>

## Overview

This starter template provides everything you need to get started with building Dioxus applications using the Lumen Blocks component library. Lumen Blocks offers ARIA-accessible, styled, opinionated components inspired by shadcn UI and built on top of Dioxus Primitives.

## Project Structure

This bare-bones project includes minimal organization with a single `main.rs` file and a few assets.

```
project/
├─ assets/ # Any assets that are used by the app should be placed here
├─ src/
│  ├─ main.rs # main.rs is the entry point to your application and currently contains all components for the app
├─ Cargo.toml # The Cargo.toml file defines the dependencies and feature flags for your project
```

## Getting Started

### Prerequisites

- [Rust](https://www.rust-lang.org/tools/install)
- [Dioxus toolchain](https://dioxuslabs.com/learn/0.7/getting_started/#)

### Installation

1. Clone this repository or use it as a template for your new project

### Serving Your App

Run the following command in the root of your project to start developing with the default platform:

```bash
dx serve
```

To run for a different platform, use the `--platform platform` flag. E.g.
```bash
dx serve --platform desktop
```

## Using Lumen Blocks Components

Please check the [Lumen Blocks documentation](https://lumenblocks.dev/docs) for a complete list of components and usage examples.

## Learn More

- [Lumen Blocks Documentation](https://lumenblocks.dev)
- [Dioxus Documentation](https://dioxuslabs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
