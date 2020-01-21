variable "docker_image" {
  default = "waqasali/fyp-stock"
}

provider "docker" {
  host = "ssh://waqas@202.45.128.184"
}
