using System;
using Xunit;
using food_helper.api;
using food_helper.api.Controllers;

namespace food_helper.api.tests
{
    public class WeatherForecastTests
    {
        [Fact]
        public void ShouldReturnAtLeastOneForecast()
        {
            //Arrange
            var controller = new WeatherForecastController(null);
            //Act
            var items = controller.Get();
            //Assert
            Assert.NotEmpty(items);
        }
        [Fact]
        public void ShouldWork()
        {
            Assert.Equal(1, 1);
        }
    }
}
